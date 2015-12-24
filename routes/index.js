var express = require('express');
var router = express.Router();
var _ = require('lodash');
var api = require('./api/index');
var templates = require('./templates/index');

// base templates
// router.get('/video', templates.video);
// router.get('/confirm', templates.confirm);
// router.get('/welcome', templates.welcome);
// router.get('/getcsv', templates.csv);
// router.get('/terms-of-service', templates.tos);

// apis
router.get('/api/hello', api.hello);
router.post('/api/world', api.world);
// router.get('/api/csv/times/:client', api.getTimesCsv);
// router.get('/api/mail/surveylink/:email', api.sendSurveyLink);

// default to the welcome page
router.get('/', templates.welcome);

module.exports = router;
