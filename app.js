var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
const helpers = require('./helpers/index')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const basicAuth = require('express-basic-auth');
const swaggerDocument = require('./swagger.json');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.options('*', cors());
//app.options("*", cors({ origin: ['http://localhost:3000'], optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));



const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Liberty API for Crm',
      version: '1.0.0',
      description: 'Rest endpoints for use by Nauli CRM',
    },
    basePath: "/api/v1/",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
   
    servers: [
      {
        url: "http://localhost:3303",
        description: 'Development server'
      },
      
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", basicAuth({
  users: { 'api': 'api1234,' },
  challenge: true,
}), swaggerUi.serve, swaggerUi.setup(specs))

app.use('/', require('./routes/index'));
app.use('/api/v1', require('./routes/users'));
app.use('/api/v1', require('./routes/sacco'))

app.use('/api/v1', require('./routes/auth'))
app.use('/api/v1', require('./routes/fleet'))



app.use(function (req, res, next) {
  return helpers.response.notFoundResponse(res, "Api resource not found")
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;