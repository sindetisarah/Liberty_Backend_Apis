var express = require('express');

var router = express.Router();

const controller = require('../controllers/index')

const Joi = require('../joi/fleet.joi')

const jwt = require('../helpers/jwt.helper')


router.post('/fleet', Joi.validateBody(Joi.schemas.create), jwt.checkAuth, controller.fleet.create);


/**
 * @swagger
 *  /api/v1/fleet:
 *      get:
 *          summary: Get Customers tickets
 *          description: Displays the list of the vehicles
 *          tags: [Fleet]
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
router.get('/fleet', jwt.checkAuth, controller.fleet.fetch);


/**
 * @swagger
 *  /api/v1/fleet/conversations:
 *      post:
 *          summary: Get Customers fleet conversations
 *          tags: [Tickets]
 *          security: 
 *              - bearerAuth: []
*          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          ticketId:
 *                              type: number
 *                              description: 'Enter the routeID' 
 *          responses:
 *              401:
 *                  description: 'Authorization error'
 *              500:
 *                  description: 'Internal server error'
 *              200:
 *                  description: 'Request was successful'
 */
router.post('/tickets/conversations', Joi.validateBody(Joi.schemas.conversation), jwt.checkAuth, controller.fleet.fetchConversations);

module.exports = router;
var express = require('express');

var router = express.Router();

const controller = require('../controllers/index')

const Joi = require('../joi/fleet.joi')

const jwt = require('../helpers/jwt.helper')


/**
 * @swagger
 *  /api/v1/fleet:
 *      post:
 *          summary:create vehicle
 *          description: Create vehicle in a fleet
 *          tags: [Fleet]
 *          security:
 *              - bearerAuth: []     
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                         name:
 *                              type: string
 *                              description: 'name' 
 *                          routeNumber:
 *                              type: integer
 *                              description: 'Route number of vehicle'
 *                          region:
 *                              type: string
 *                              description: 'region'
 *                          primaryTerminus: 
 *                              type: string
 *                              description: 'primaryTerminus'
 *                          maximumFare: 
 *                              type: string
 *                              description: 'maximumFare'
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

router.post('/fleet', Joi.validateBody(Joi.schemas.create), jwt.checkAuth, controller.fleet.create);


/**
 * @swagger
 *  /api/v1/fleet:
 *      get:
 *          summary: Get Customers vehicles
 *          description: Displays the list of vehicles
 *          tags: [Tickets]
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
router.get('/fleet', jwt.checkAuth, controller.fleet.fetch);


/**
 * @swagger
 *  /api/v1/fleet/conversations:
 *      post:
 *          summary: Get list of vehicle
 *          description: Displays the list of the vehicles in a fleet
 *          tags: [Fleet]
 *          security: 
 *              - bearerAuth: []
*          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          routeId:
 *                              type: number
 *                              description: 'Enter the route ID' 
 *          responses:
 *              401:
 *                  description: 'Authorization error'
 *              500:
 *                  description: 'Internal server error'
 *              200:
 *                  description: 'Request was successful'
 */
router.post('/fleet/conversations', Joi.validateBody(Joi.schemas.conversation), jwt.checkAuth, controller.fleet.fetchConversations);

module.exports = router;
