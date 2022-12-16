require('dotenv').config()
const service = require('../services/index');
const helpers = require('../helpers/index')

exports.create = async (req, res, next) => {
    try {
        await service.sacco.create(req, res, next).then(async results => {
            return helpers.response.successResponse(res, "Sacco created successful.");
        }, async error => {
            console.error(JSON.stringify(error))
            return helpers.response.notFoundResponse(res, error);
        })
    } catch (e) {
        console.error(e)
        return helpers.response.ErrorResponse(res, "Request failed. Please try again after sometime.")
    }
}

exports.fetch = async (req, res, next) => {
    try {
        await service.sacco.fetch(req, res, next).then(async results => {
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
        await service.sacco.update(req, res, next).then(async results => {
            return helpers.response.successResponse(res, "Sacco updated successful.");
        }, async error => {
            console.error(JSON.stringify(error))
            return helpers.response.notFoundResponse(res, error);
        })
    } catch (e) {
        console.error(e)
        return helpers.response.ErrorResponse(res, "Request failed. Please try again after sometime.")
    }
}

exports.delete = async (req, res, next) => {
    try {
        await service.sacco.delete(req, res, next).then(async results => {
            return helpers.response.successResponse(res, "Sacco has been deleted successful.");
        }, async error => {
            console.error(JSON.stringify(error))
            return helpers.response.notFoundResponse(res, error);
        })
    } catch (e) {
        console.error(e)
        return helpers.response.ErrorResponse(res, "Request failed. Please try again after sometime.")
    }
}
