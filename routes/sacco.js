var express = require('express');

var router = express.Router();

const controller = require('../controllers/index')

const Joi = require('../joi/sacco.joi')

const jwt = require('../helpers/jwt.helper')

/**
 * @swagger
 *  /api/v1/sacco:
 *      post:
 *          summary: Create a sacco
 *          tags: [Sacco]
 *          security:
 *              - bearerAuth: []     
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: 'name' 
 *                          senderId:
 *                              type: string
 *                              description: 'SenderId'
 *                          adress:
 *                              type: string
 *                              description: 'Adress'
 *                          contactNumber:
 *                              type: string
 *                              description: 'If the Referral has the watersource or not'
 *                          postalAdress: 
 *                              type: string
 *                              description: 'PostalAdress'
 *                          code: 
 *                              type: string
 *                              description: 'code'
 *                          primaryTerminus: 
 *                              type: string
 *                              description: 'Primary TErminus'
 *                          secondaryTerminus: 
 *                              type: string
 *                              description: 'Terminus: 
 *                          maximumFare: 
 *                               type: string
 *                          platfromFee:
 *                               type: integer
 *                               description: 'fee: 
 *  
 *                            
 *          responses:
 *              401:
 *                  description: 'Authorization error'
 *              500:
 *                  description: 'Internal server error'
 *              200:
 *                  description: 'Request was successful'
 *              400:
 *                  description: 'Bad Request'
 *              404:
 *                  description: 'Not found'
 */

router.post('/sacco', Joi.validateBody(Joi.schemas.create), jwt.checkAuth, controller.sacco.create);

/**
 * @swagger
 *  /api/v1/sacco:
 *      get:
 *          summary: Get List of vehicle
 *          tags: [sacco]
 *          security: 
 *              - bearerAuth: []
 *          responses:
 *              401:
 *                  description: 'Authorization error'
 *              500:
 *                  description: 'Internal server error'
 *              200:
 *                  description: 'Request was successful'
 */
router.get('/sacco', jwt.checkAuth, controller.sacco.fetch);
 
router.put('/sacco/:routerId', Joi.validateBody(Joi.schemas.create), jwt.checkAuth, controller.saccp.update);


module.exports = router;
