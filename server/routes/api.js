var express = require('express');
require('../models/db');
var app = express();    
var FirmwareRoutes = require('./firmware-routes');
const DeviceRoutes = require('./device-routes');
const TMSUploadFilesRoutes = require('./tms_upload_files-routes');
const ZsequenceNumberRoutes = require('./zsequencenumbers-routes');
const ResponseToPOSRoutes = require('./responsetoPos-routes');
app.get('/',(req,res,next)=>{
    res.send("ok...");
})
app.use('/firmware_routes',FirmwareRoutes);
app.use('/device_routes',DeviceRoutes);
app.use('/tms_file_routes',TMSUploadFilesRoutes);
app.use('/zsequence_routes',ZsequenceNumberRoutes);
app.use('/scope_response_routes',ResponseToPOSRoutes);

module.exports = app;