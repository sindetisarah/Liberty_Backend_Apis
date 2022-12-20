const models = require('../models/index');
const { getAccessToken } = require('./auth.service');

exports.create = async (req, res, next) => {
    return new Promise(async (resolve, reject) => {
        await models.fleet.create(async token => {
            var options = {
                'method': 'POST',
                
                'headers': { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        "name":req.body.name,
                        "routeNumber": req.body.routeNumber,
                        "region":req.body.region,
                        "primaryTerminus":req.body.primaryTerminus,
                        "secondaryTerminus": req.body.secondaryTerminus,
                        "maximumFare":req.body.maximumFare
                      }
                )

            };
            await request(options, async (error, response) => {
                if (error) {
                    console.error(error)
                    reject(error)
                } else {
                    console.info(response.statusCode);
                    if (response.statusCode === 201) {
                        resolve(response.body)

                    } else {
                        reject(response.body)
                    }
                }
            });
        }, async (error) => {
            reject(error) })
    })
}
exports.fetch = async (req, res, next) => {
    req.query['fleet'] = res.JWTDecodedData.pin
    let where = req.query;
    return new Promise(async (resolve, reject) => {
        await models.fleet.findAll({ where: where }).then(async results => {
            resolve(results)
        }, async err => {
            console.error(err)
            reject(err)
        })
    })
}

exports.update = async (req, res, next) => {
    return new Promise(async (resolve, reject) => {
        await models.referrals.update({
            name:req.body.name,
            routeNumber: req.body.routeNumber,
            region:req.body.region,
            primaryTerminus:req.body.primaryTerminus,
            secondaryTerminus: req.body.secondaryTerminus,
            maximumFare:req.body.maximumFare
        }, { where: { referralId: req.params.referralId } }).then(async result => {
            console.info(`Fleet has been updated successful`)
            resolve(result)
        }, async err => {
            console.error(err)
            reject(err)
        })
    })
}

exports.delete = async (req, res, next) => {
    return new Promise(async (resolve, reject) => {
        await models.fleet.destroy({
            where: { routeId: req.params.routeId }
        }).then(async results => {
            resolve(results)
        }, async err => {
            console.error(err)
            reject(err)
        })
    })
}