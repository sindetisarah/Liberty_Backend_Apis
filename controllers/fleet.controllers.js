require('dotenv').config()
const service = require('../services/index');
const helpers = require('../helpers/index')

//Add vehicle
exports.create = async (req, res, next) => {
    try {
        await service.fleet.create(req, res, next).then(async results => {
            return helpers.response.successResponse(res, "Sacco has been created succesful.");
        }, async error => {
            console.error(JSON.stringify(error))
            return helpers.response.notFoundResponse(res, error);
        })
    } catch (e) {
        console.error(e)
        return helpers.response.ErrorResponse(res, "Request failed. Please try again after sometime.")
    }
}
// get a list of vehicle

exports.fetch = async (req, res, next) => {
    try {
        await service.fleet.fetch(req, res, next).then(async results => {
            return helpers.response.successResponseWithData(res, "success", results);
        }, async error => {
            console.error(JSON.stringify(error))
            return helpers.response.notFoundResponse(res, error);
        })
    } catch (e) {
        console.error(e)
        return helpers.response.ErrorResponse(res, "Request failed. Please try again after sometime.")
    }
}

exports.update = async (req, res, next) => {
    try {
        await service.fleet.update(req, res, next).then(async results => {
            return helpers.response.successResponse(res, "Vehicle has been updated successful.");
        }, async error => {
            console.error(JSON.stringify(error))
            return helpers.response.notFoundResponse(res, error);
        })
    } catch (e) {
        console.error(e)
        return helpers.response.ErrorResponse(res, "Request failed. Please try again after sometime.")
    }
}


