var express = require('express');
var passport = require('passport');
require('../models/db');
require('../config/passport');
var app = express();
const ctrlAuth = require('./authentication');
const ctrlProfile = require('./profile');
var FirmwareRoutes = require('./firmware-routes');
const DeviceRoutes = require('./device-routes');
const TMSUploadFilesRoutes = require('./tms_upload_files-routes');
const ZsequenceNumberRoutes = require('./zsequencenumbers-routes');
const ResponseToPOSRoutes = require('./responsetoPos-routes');
const transactionRoutes = require('./transactions-routes');
const accessControlRoutes = require('./acesscontrol-routes');
const usersRoutes = require('./users');
app.get('/',(req,res,next)=>{
    res.send("ok...");
})
app.use(passport.initialize());
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
app.post('/register',ctrlAuth.register);
app.post('/login',ctrlAuth.login);
app.get('/profile', auth, ctrlProfile.profileRead);
app.use('/firmware_routes',FirmwareRoutes);
app.use('/device_routes',DeviceRoutes);
app.use('/tms_file_routes',TMSUploadFilesRoutes);
app.use('/zsequence_routes',ZsequenceNumberRoutes);
app.use('/scope_response_routes',ResponseToPOSRoutes);
app.use('/transactions',transactionRoutes);
app.use('/accesscontrol',accessControlRoutes);
app.use('/users',usersRoutes);
module.exports = app;
