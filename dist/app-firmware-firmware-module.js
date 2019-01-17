(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-firmware-firmware-module"],{

/***/ "./src/app/firmware/can-deactivate-guard.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/firmware/can-deactivate-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/firmware/firmware-module.ts":
/*!*********************************************!*\
  !*** ./src/app/firmware/firmware-module.ts ***!
  \*********************************************/
/*! exports provided: FirmwareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareModule", function() { return FirmwareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firmware_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firmware-routing.module */ "./src/app/firmware/firmware-routing.module.ts");
/* harmony import */ var _newpos_newpos_devices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newpos/newpos-devices.component */ "./src/app/firmware/newpos/newpos-devices.component.ts");
/* harmony import */ var _saral_saral_devices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saral/saral-devices.component */ "./src/app/firmware/saral/saral-devices.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./can-deactivate-guard.service */ "./src/app/firmware/can-deactivate-guard.service.ts");
/* harmony import */ var _firmware_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./firmware-service */ "./src/app/firmware/firmware-service.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FirmwareModule = /** @class */ (function () {
    function FirmwareModule() {
    }
    FirmwareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_firmware_routing_module__WEBPACK_IMPORTED_MODULE_1__["FirmwareRoutesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]],
            declarations: [_newpos_newpos_devices_component__WEBPACK_IMPORTED_MODULE_2__["NewposDevicesComponent"], _saral_saral_devices_component__WEBPACK_IMPORTED_MODULE_3__["SaralDevicesComponent"]],
            exports: [],
            entryComponents: [],
            providers: [_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_10__["CanDeactivateGuard"], _firmware_service__WEBPACK_IMPORTED_MODULE_11__["FirmwareService"]]
        })
    ], FirmwareModule);
    return FirmwareModule;
}());



/***/ }),

/***/ "./src/app/firmware/firmware-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/firmware/firmware-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FirmwareRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareRoutesModule", function() { return FirmwareRoutesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _saral_saral_devices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saral/saral-devices.component */ "./src/app/firmware/saral/saral-devices.component.ts");
/* harmony import */ var _newpos_newpos_devices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newpos/newpos-devices.component */ "./src/app/firmware/newpos/newpos-devices.component.ts");
/* harmony import */ var _can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./can-deactivate-guard.service */ "./src/app/firmware/can-deactivate-guard.service.ts");




var routes = [
    {
        path: 'saral-firmware',
        canDeactivate: [_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanDeactivateGuard"]],
        component: _saral_saral_devices_component__WEBPACK_IMPORTED_MODULE_1__["SaralDevicesComponent"]
    },
    {
        path: 'newpos-firmware',
        canDeactivate: [_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanDeactivateGuard"]],
        component: _newpos_newpos_devices_component__WEBPACK_IMPORTED_MODULE_2__["NewposDevicesComponent"]
    },
    {
        path: '',
        canDeactivate: [_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanDeactivateGuard"]],
        redirectTo: 'saral-firmware',
        pathMatch: 'full'
    }
];
var FirmwareRoutesModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/firmware/firmware-service.ts":
/*!**********************************************!*\
  !*** ./src/app/firmware/firmware-service.ts ***!
  \**********************************************/
/*! exports provided: FirmwareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareService", function() { return FirmwareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirmwareService = /** @class */ (function () {
    function FirmwareService(http) {
        this.http = http;
    }
    FirmwareService.prototype.uploadFirmware = function (firmware) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        //return this.http.post('/api/uploadFiles',firmware,{headers:httpHeaders});
        //return this.http.post('http://localhost:3000/api/uploadFiles',firmware,{headers:httpHeaders});
        return this.http.post('http://localhost:3000/firmware', firmware, { headers: httpHeaders });
    };
    FirmwareService.prototype.uploadFile = function (file, firmware) {
        var formData = new FormData();
        formData.append("uploads[]", file, file.name);
        //formData.append("jonah","kiprop");
        ///formData.append("details",firmware);
        for (var key in firmware) {
            console.log(key);
            formData.append(key, firmware[key]);
        }
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
        //return this.http.post('http://localhost:3000/api/uploadfirmware',formData,{headers:httpHeaders,reportProgress:true,observe:'events'});
        //return this.http.post('http://localhost:3000/uploadFile',formData,{headers:httpHeaders,reportProgress:true,observe:'events'});
        return this.http.post('http://localhost:2000/api/firmware_routes/uploadFile', formData, { headers: httpHeaders, reportProgress: true, observe: 'events' });
    };
    FirmwareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FirmwareService);
    return FirmwareService;
}());



/***/ }),

/***/ "./src/app/firmware/newpos/newpos-devices.component.css":
/*!**************************************************************!*\
  !*** ./src/app/firmware/newpos/newpos-devices.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    min-height:100vh;\r\n}\r\nmat-form-field{\r\n    width:100%;\r\n}\r\nform{\r\n    /*background-color: aliceblue;*/\r\n}\r\nmat-card{\r\n    margin:5px;\r\n}\r\n@media only screen and (max-device-width:599px){\r\n    mat-form-field{\r\n        width:100%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/firmware/newpos/newpos-devices.component.html":
/*!***************************************************************!*\
  !*** ./src/app/firmware/newpos/newpos-devices.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"body\">\r\n    <mat-card>\r\n  <input style = \"display: none;\" type = \"file\" (change) = \"onFileUpload($event)\" #fileInputHandler/>\r\n  <form [formGroup] = \"firmwareFormGroup\" fxFlexOffset.gt-xs = \"30%\" fxFlex.gt-xs = \"40%\">\r\n      <div>\r\n          <button style = \"margin-left:40%;background-color: teal\"mat-raised-button  type = \"button\" (click) = \"fileInputHandler.click()\">select file</button>\r\n      </div>\r\n    <div>\r\n        <label for = \"filename\">filename</label><br>\r\n        <mat-form-field>\r\n            <input class = \"input\" matInput type = \"text\" formControlName = \"filename\" [(ngModel)] = \"uploadedFirmware.filename\" name = \"filename\"/>\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <label for = \"type\">type</label><br>\r\n        <mat-form-field>\r\n           <input class = \"input\" matInput type = \"text\" formControlName = \"type\" [(ngModel)] = \"uploadedFirmware.type\" name = \"type\"/>\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <label for = \"version\">version</label><br>\r\n        <mat-form-field>\r\n         <input class = \"input\" matInput type = \"text\" placeholder = \"1.2.1\" formControlName = \"version\"  [(ngModel)] = \"uploadedFirmware.version\" required/>\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <label for = \"model\">device model</label><br>\r\n        <mat-form-field>\r\n        <input class = \"input\" matInput type = \"text\" placeholder = \"saral infotech\" formControlName = \"model\" [(ngModel)] = \"uploadedFirmware.model\" required/>\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <button [disabled] = \"firmwareFormGroup.status === 'INVALID'\" mat-raised-button style = \"background-color:teal;\" (click) = \"uploadFile()\">upload</button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/firmware/newpos/newpos-devices.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/firmware/newpos/newpos-devices.component.ts ***!
  \*************************************************************/
/*! exports provided: NewposDevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewposDevicesComponent", function() { return NewposDevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_firmware_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/firmware_files */ "./src/app/models/firmware_files.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _firmware_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firmware-service */ "./src/app/firmware/firmware-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewposDevicesComponent = /** @class */ (function () {
    function NewposDevicesComponent(fb, dialogService, firmwareService) {
        this.fb = fb;
        this.dialogService = dialogService;
        this.firmwareService = firmwareService;
        this.uploadedFile = null;
        this.uploadedFirmware = new _models_firmware_files__WEBPACK_IMPORTED_MODULE_1__["FirmwareFiles"]('', '', '', '', '');
        this.createForm();
    }
    NewposDevicesComponent.prototype.createForm = function () {
        this.firmwareFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            filename: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.uploadedFirmware.filename, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.uploadedFirmware.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            version: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.uploadedFirmware.model, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.uploadedFirmware.model, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    NewposDevicesComponent.prototype.clearFile = function () {
        this.firmwareFormGroup.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = "";
    };
    NewposDevicesComponent.prototype.uploadFile = function () {
        console.log("Will upload file");
        //this.firmwareService.uploadFirmware(this.uploadedFirmware).subscribe(res =>{console.log(res)});
    };
    NewposDevicesComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        var reader = new FileReader();
        console.log(event.target.files[0]);
        this.uploadedFile = event.target.files[0];
        this.firmwareFormGroup.setValue({
            filename: this.uploadedFile.name,
            type: this.uploadedFile.type,
            version: '',
            model: ''
        });
        reader.readAsDataURL(this.uploadedFile);
        reader.onload = function () {
            console.log(reader.result.split(',')[1]);
            _this.uploadedFirmware.md5sum = reader.result.split(',')[1];
        };
    };
    NewposDevicesComponent.prototype.canDeactivate = function () {
        if (JSON.stringify(new _models_firmware_files__WEBPACK_IMPORTED_MODULE_1__["FirmwareFiles"]('', '', '', '', '')) == JSON.stringify(this.uploadedFirmware)) {
            return true;
        }
        return this.dialogService.confirm('Are you sure to discard?');
    };
    NewposDevicesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NewposDevicesComponent.prototype, "fileInput", void 0);
    NewposDevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newpos-devices',
            template: __webpack_require__(/*! ./newpos-devices.component.html */ "./src/app/firmware/newpos/newpos-devices.component.html"),
            styles: [__webpack_require__(/*! ./newpos-devices.component.css */ "./src/app/firmware/newpos/newpos-devices.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"], _firmware_service__WEBPACK_IMPORTED_MODULE_4__["FirmwareService"]])
    ], NewposDevicesComponent);
    return NewposDevicesComponent;
}());



/***/ }),

/***/ "./src/app/firmware/saral/saral-devices.component.css":
/*!************************************************************!*\
  !*** ./src/app/firmware/saral/saral-devices.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    min-height:100vh;\r\n}\r\nmat-form-field{\r\n    width:100%;\r\n}\r\nform{\r\n    /*background-color: aliceblue;*/\r\n}\r\nmat-card{\r\n    margin:5px;\r\n}\r\ndiv ~ mat-card {\r\n    opacity: 0.2;\r\n}\r\n.mat-progress{\r\n    -webkit-tap-highlight-color: transparent;\r\n    margin-top:-250px;\r\n    z-index:2;   \r\n\r\n}\r\nspan ~ p{\r\n    opacity: 0.2;\r\n    background-color: yellow;\r\n}\r\n@media only screen and (max-device-width:599px){\r\n    mat-form-field{\r\n        width:100%;\r\n        \r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/firmware/saral/saral-devices.component.html":
/*!*************************************************************!*\
  !*** ./src/app/firmware/saral/saral-devices.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class = \"body\">\r\n    <mat-card>\r\n  <input style = \"display: none;\" type = \"file\" (change) = \"onFileUpload($event)\" #fileInputHandler/>\r\n      <div>\r\n          <button style = \"margin-left:40%;background-color: teal\"mat-raised-button  type = \"button\" (click) = \"fileInputHandler.click()\">select file</button>\r\n      </div>\r\n</mat-card>\r\n</div>-->\r\n<div class = \"body\">\r\n    <mat-card [hidden] = \"!hideProgress\" [ngStyle] = \"{opacity:enableOpacity == true ? 0.1 :1}\">\r\n  <input style = \"display: none;\" type = \"file\" (change) = \"onFileUpload($event)\" #fileInputHandler/>\r\n  <form [formGroup] = \"firmwareFormGroup\" fxFlexOffset.gt-xs = \"30%\" fxFlex.gt-xs = \"40%\">\r\n      <div>\r\n          <button style = \"margin-left:40%;background-color: teal\"mat-raised-button  type = \"button\" (click) = \"fileInputHandler.click()\">select file</button>\r\n      </div>\r\n    <div>\r\n        <label for = \"filename\">filename</label><br>\r\n        <mat-form-field>\r\n            <input class = \"input\" matInput type = \"text\" formControlName = \"filename\" [(ngModel)] = \"uploadedFirmware.filename\" name = \"filename\" disabled/>\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <label for = \"type\">type</label><br>\r\n        <mat-form-field>\r\n           <input class = \"input\" matInput type = \"text\" formControlName = \"type\" [(ngModel)] = \"uploadedFirmware.type\" name = \"type\"/>\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <label for = \"version\">version</label><br>\r\n        <mat-form-field>\r\n         <input class = \"input\" matInput type = \"text\" placeholder = \"1.2.1\" formControlName = \"version\"  [(ngModel)] = \"uploadedFirmware.version\" required/>\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <label for = \"model\">device model</label><br>\r\n        <mat-form-field>\r\n        <input class = \"input\" matInput type = \"text\" placeholder = \"saral infotech\" formControlName = \"model\" [(ngModel)] = \"uploadedFirmware.model\" required/>\r\n        </mat-form-field>\r\n    </div>\r\n    <div>\r\n        <button [disabled] = \"firmwareFormGroup.status === 'INVALID'\" mat-raised-button style = \"background-color:teal;\" (click) = \"uploadFirmware()\">upload</button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n<div [hidden] = \"hideProgress\" class = \"mat-progress\">\r\n    <!--<mat-progress-bar color = \"primary\" mode=\"determinate\" value=\"40\"></mat-progress-bar> -->\r\n    <mat-progress-bar\r\n          class=\"example-margin\"\r\n          [color]=\"color\"\r\n          [mode]=\"mode\"\r\n          [value]=\"value\"\r\n          [bufferValue]=\"bufferValue\">\r\n      </mat-progress-bar>\r\n      <span style = \"display:block;margin-left:40%\">progress {{value}} %</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/firmware/saral/saral-devices.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/firmware/saral/saral-devices.component.ts ***!
  \***********************************************************/
/*! exports provided: SaralDevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaralDevicesComponent", function() { return SaralDevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_firmware_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/firmware_files */ "./src/app/models/firmware_files.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _firmware_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firmware-service */ "./src/app/firmware/firmware-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SaralDevicesComponent = /** @class */ (function () {
    function SaralDevicesComponent(firmwareService) {
        this.firmwareService = firmwareService;
        this.uploadedFirmware = new _models_firmware_files__WEBPACK_IMPORTED_MODULE_1__["FirmwareFiles"]('', '', '', '', '');
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 0;
        this.bufferValue = 100;
        this.hideProgress = true;
        this.enableOpacity = false;
        this.createForm();
    }
    SaralDevicesComponent.prototype.createForm = function () {
        this.firmwareFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            filename: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.uploadedFirmware.filename, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.uploadedFirmware.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            version: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.uploadedFirmware.model, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.uploadedFirmware.model, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    SaralDevicesComponent.prototype.onFileUpload = function (event) {
        this.uploadedFile = event.target.files[0];
        this.firmwareFormGroup.setValue({
            filename: this.uploadedFile.name,
            type: this.uploadedFile.type,
            version: '',
            model: ''
        });
    };
    SaralDevicesComponent.prototype.uploadFirmware = function () {
        var _this = this;
        this.hideProgress = false;
        this.enableOpacity = true;
        this.uploadedFirmware.md5sum = "";
        this.value = 0;
        this.firmwareService.uploadFile(this.uploadedFile, this.uploadedFirmware).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                _this.value = Math.round(event.loaded / event.total * 100);
                console.log("upload progress " + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
                console.log(event.body);
                _this.hideProgress = true;
                _this.enableOpacity = false;
            }
        });
        /*this.firmwareService.uploadFirmware(this.uploadedFirmware).subscribe(res =>{
            console.log(res);
            this.firmwareService.uploadFile(this.uploadedFile,this.uploadedFirmware).subscribe(event =>{
                if(event.type === HttpEventType.UploadProgress){
                    this.value = Math.round(event.loaded/event.total *100);
                    console.log("upload progress " +Math.round(event.loaded/event.total *100) + '%');
                }
                else if(event.type === HttpEventType.Response){
                    console.log(event.body);
                    this.hideProgress = true;
                    this.enableOpacity = false;
                }
            })
        });*/
    };
    SaralDevicesComponent.prototype.ngOnInit = function () {
    };
    SaralDevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'saral-devices',
            template: __webpack_require__(/*! ./saral-devices.component.html */ "./src/app/firmware/saral/saral-devices.component.html"),
            styles: [__webpack_require__(/*! ./saral-devices.component.css */ "./src/app/firmware/saral/saral-devices.component.css")]
        }),
        __metadata("design:paramtypes", [_firmware_service__WEBPACK_IMPORTED_MODULE_3__["FirmwareService"]])
    ], SaralDevicesComponent);
    return SaralDevicesComponent;
}());



/***/ }),

/***/ "./src/app/models/firmware_files.ts":
/*!******************************************!*\
  !*** ./src/app/models/firmware_files.ts ***!
  \******************************************/
/*! exports provided: FirmwareFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareFiles", function() { return FirmwareFiles; });
var FirmwareFiles = /** @class */ (function () {
    function FirmwareFiles(filename, type, version, model, md5sum) {
        this.filename = filename;
        this.type = type;
        this.version = version;
        this.model = model;
        this.md5sum = md5sum;
    }
    return FirmwareFiles;
}());



/***/ })

}]);
//# sourceMappingURL=app-firmware-firmware-module.js.map