const Joi = require('joi');

module.exports = {
    schemas: {


        
        create: Joi.object().keys({
            pin: Joi.string().required(),
            name: Joi.string().required(),
            senderId: Joi.string().required(),
            address: Joi.string().required(),
            contactNumber: Joi.string().required(),
            postalAddress: Joi.string().required(),
            tagline: Joi.string().required(),
            code: Joi.string().required(),
            region: Joi.string().required(),
            primaryTerminus: Joi.string().required(),
            secondaryTerminus:Joi.string().required(),
            maximumFare: Joi.string().required(),
            platformFee: Joi.string().required(),

        })
    },

    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json({
                    headers: {
                        status: false,
                        status_code: 400,
                        status_message: result.error.details[0].message.replace(/"/g, '')
                    },
                    body: null
                })
            } else {
                if (!req.value) {
                    req.value = {}
                }
                req.value['body'] = result.value;
                next();
            }
        }
    }
}