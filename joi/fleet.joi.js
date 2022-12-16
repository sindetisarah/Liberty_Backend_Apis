const Joi = require('joi');

module.exports = {
    schemas: {
        create: Joi.object().keys({
            name: Joi.string().required(),
            routeNumber: Joi.string().required(),
            region: Joi.string().required(),
            primaryTerminus: Joi.string().required(),
            maximumFare:Joi.number.required()
        }),

        conversation: Joi.object().keys({
            routeId: Joi.number().required()
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