const Joi = require('joi');

module.exports = {
    schemas: {
        create: Joi.object().keys({
            query: Joi.number().required()
        }),

        verify: Joi.object().keys({
            query: Joi.number().required(),
            code: Joi.number().required()
        })
    },

    validateBody: (schema) => {
        return (req, res, next) => {
            console.info(`Payload: ${JSON.stringify(req.body)}`)
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                console.error(result.error.details[0].message.replace(/"/g, ''))
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