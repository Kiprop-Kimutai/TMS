(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["switch-switch-module"],{

/***/ "./src/app/common/PaginatorFunction.ts":
/*!*********************************************!*\
  !*** ./src/app/common/PaginatorFunction.ts ***!
  \*********************************************/
/*! exports provided: paginatorFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginatorFunction", function() { return paginatorFunction; });
function paginatorFunction(arrayELement, number_of_elements, begin_index) {
    var pageno = Math.ceil(arrayELement.length / number_of_elements);
    //console.log(arrayELement.slice((begin_index*number_of_elements),number_of_elements));
    if (begin_index == 0) {
        return arrayELement.slice((begin_index * number_of_elements), number_of_elements);
    }
    console.log("=>" + pageno);
    console.log("no of elements =>" + number_of_elements);
    console.log("begin index" + begin_index);
    console.log("=>" + (begin_index * number_of_elements));
    console.log("=>" + (number_of_elements + (begin_index * number_of_elements)));
    return arrayELement.slice((begin_index * number_of_elements), number_of_elements + ((begin_index) * number_of_elements));
}


/***/ }),

/***/ "./src/app/switch/response/response.component.css":
/*!********************************************************!*\
  !*** ./src/app/switch/response/response.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    min-height: 89vh;\r\n}"

/***/ }),

/***/ "./src/app/switch/response/response.component.html":
/*!*********************************************************!*\
  !*** ./src/app/switch/response/response.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"body\">\r\n    <h3>Render response to POS here</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/switch/response/response.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/switch/response/response.component.ts ***!
  \*******************************************************/
/*! exports provided: ResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComponent", function() { return ResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResponseComponent = /** @class */ (function () {
    function ResponseComponent() {
    }
    ResponseComponent.prototype.ngOnInit = function () {
    };
    ResponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "response-to-pos",
            template: __webpack_require__(/*! ./response.component.html */ "./src/app/switch/response/response.component.html"),
            styles: [__webpack_require__(/*! ./response.component.css */ "./src/app/switch/response/response.component.css")]
        })
    ], ResponseComponent);
    return ResponseComponent;
}());



/***/ }),

/***/ "./src/app/switch/switch.module.ts":
/*!*****************************************!*\
  !*** ./src/app/switch/switch.module.ts ***!
  \*****************************************/
/*! exports provided: SwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchModule", function() { return SwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/switch/transactions/transactions.component.ts");
/* harmony import */ var _transactions_transaction_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions/transaction-details.component */ "./src/app/switch/transactions/transaction-details.component.ts");
/* harmony import */ var _zsequence_zsequence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zsequence/zsequence.component */ "./src/app/switch/zsequence/zsequence.component.ts");
/* harmony import */ var _response_response_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response/response.component */ "./src/app/switch/response/response.component.ts");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switch.service */ "./src/app/switch/switch.service.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'transactions',
        component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__["TransactionsComponent"]
    },
    {
        path: 'transactions/:token',
        component: _transactions_transaction_details_component__WEBPACK_IMPORTED_MODULE_3__["TransactionDetailComponent"]
    },
    {
        path: 'zsequence',
        component: _zsequence_zsequence_component__WEBPACK_IMPORTED_MODULE_4__["ZsequenceComponent"]
    },
    {
        path: 'responsetopos',
        component: _response_response_component__WEBPACK_IMPORTED_MODULE_5__["ResponseComponent"]
    },
    {
        path: '',
        redirectTo: 'transactions',
        pathMatch: 'full'
    }
];
var SwitchModule = /** @class */ (function () {
    function SwitchModule() {
    }
    SwitchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
            exports: [],
            declarations: [_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__["TransactionsComponent"], _transactions_transaction_details_component__WEBPACK_IMPORTED_MODULE_3__["TransactionDetailComponent"], _zsequence_zsequence_component__WEBPACK_IMPORTED_MODULE_4__["ZsequenceComponent"], _response_response_component__WEBPACK_IMPORTED_MODULE_5__["ResponseComponent"]],
            providers: [_switch_service__WEBPACK_IMPORTED_MODULE_6__["SwitchService"]]
        })
    ], SwitchModule);
    return SwitchModule;
}());



/***/ }),

/***/ "./src/app/switch/switch.service.ts":
/*!******************************************!*\
  !*** ./src/app/switch/switch.service.ts ***!
  \******************************************/
/*! exports provided: SwitchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchService", function() { return SwitchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwitchService = /** @class */ (function () {
    function SwitchService(http) {
        this.http = http;
        //API = "http://localhost:2000/api";
        this.API = "/api";
    }
    SwitchService.prototype.fetchTransactionFiles = function () {
        //return this.http.get('http://localhost:2000/api/tms_file_routes/fetchall');
        this.transactionFiles = this.http.get(this.API + "/tms_file_routes/fetchall");
        localStorage.removeItem("txnfiles");
        this.transactionFiles.subscribe(function (data) { localStorage.setItem("txnfiles", JSON.stringify(data.response_message)); });
        return this.transactionFiles;
        //return of(transactions).pipe(delay(1000));
    };
    SwitchService.prototype.setTransactionFiles = function () {
        //localStorage.setItem()
    };
    SwitchService.prototype.getTransactionFiles = function () {
        return JSON.parse(localStorage.getItem("txnfiles"));
    };
    SwitchService.prototype.fetchTransactionFileByToken = function (token) {
        console.log(localStorage.getItem("txnfiles"));
        console.log("****");
        console.log(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(localStorage.getItem("txnfiles"))).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (txnfiles) { return txnfiles.find(function (txnfile) { return txnfile.token === token; }); })));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(localStorage.getItem("txnfiles"))).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (txnfiles) { return txnfiles.find(function (txnfile) { return txnfile.token === token; }); }));
    };
    SwitchService.prototype.fetchBatchTransactionsByFilename = function (filename) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" });
        console.log("initialized..." + filename);
        return this.http.post(this.API + "/transactions/batchtransactions", { filename: filename }, { headers: headers });
    };
    SwitchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SwitchService);
    return SwitchService;
}());

var transactions = {
    "response_code": 300,
    "response_message": [
        {
            "_id": "5aab036ded2a6724b1d4c59c",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E7",
            "dateUploaded": "16-3-2018 12:36:13",
            "filename": "00_25_7E_03_93_E7#180316023714",
            "token": "180316023714",
            "flag": "U",
            "valueTransactionCount": "29",
            "valueTransactionAmount": "32487.25",
            "valueTransactionVoidCount": "8",
            "valueTransactionVoidAmount": "8635.0",
            "commodityTransactionCount": "4",
            "commodityTransactionAmount": "465.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "49",
            "lastReceiptNo": "89"
        },
        {
            "_id": "5aab2211ed2a6724b1d4c5a0",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E7",
            "dateUploaded": "16-3-2018 02:46:57",
            "filename": "00_25_7E_03_93_E7#180316044757",
            "token": "180316044757",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "50.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "9",
            "lastReceiptNo": "18"
        },
        {
            "_id": "5aab687ced2a6724b1d4c5ab",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "16-3-2018 07:47:24",
            "filename": "00_25_7E_03_93_E6#180316033248",
            "token": "180316033248",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "100.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "1",
            "lastReceiptNo": "1"
        },
        {
            "_id": "5aab6cfbed2a6724b1d4c5ad",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "16-3-2018 08:06:35",
            "filename": "00_25_7E_03_93_E6#180316035156",
            "token": "180316035156",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "200.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "100.0",
            "commodityTransactionCount": "2",
            "commodityTransactionAmount": "20.0",
            "commodityTransactionVoidCount": "10.0",
            "commodityTransactionVoidAmount": "1",
            "firstReceiptNo": "2",
            "lastReceiptNo": "7"
        },
        {
            "_id": "5aab8136ed2a6724b1d4c5b2",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E7",
            "dateUploaded": "16-3-2018 09:32:54",
            "filename": "00_25_7E_03_93_E7#180316113357",
            "token": "180316113357",
            "flag": "U",
            "valueTransactionCount": "4",
            "valueTransactionAmount": "1525.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "1",
            "lastReceiptNo": "16"
        },
        {
            "_id": "5aab8d7eed2a6724b1d4c5b3",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E7",
            "dateUploaded": "16-3-2018 10:25:18",
            "filename": "00_25_7E_03_93_E7#180316122624",
            "token": "180316122624",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "726.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "17",
            "lastReceiptNo": "19"
        },
        {
            "_id": "5aab9f24ed2a6724b1d4c5ba",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "16-3-2018 11:40:36",
            "filename": "00_25_7E_03_93_E6#180316072602",
            "token": "180316072602",
            "flag": "U",
            "valueTransactionCount": "7",
            "valueTransactionAmount": "2490.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "9",
            "lastReceiptNo": "28"
        },
        {
            "_id": "5aaba5beed2a6724b1d4c5bc",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "16-3-2018 12:08:46",
            "filename": "00_25_7E_03_93_E6#180316075410",
            "token": "180316075410",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "400.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "100.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "29",
            "lastReceiptNo": "32"
        },
        {
            "_id": "5aabb708ed2a6724b1d4c5c5",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:D9",
            "dateUploaded": "16-3-2018 01:22:32",
            "filename": "00_25_7E_03_93_D9#180316032301",
            "token": "180316032301",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "522.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "206.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "12410",
            "lastReceiptNo": "12425"
        },
        {
            "_id": "5aad308ced2a6735d3745246",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:4D",
            "dateUploaded": "17-3-2018 04:13:16",
            "filename": "00_25_7E_03_93_4D#180317061230",
            "token": "180317061230",
            "flag": "U",
            "valueTransactionCount": "31",
            "valueTransactionAmount": "611.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "60.0",
            "commodityTransactionCount": "1",
            "commodityTransactionAmount": "40.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "26",
            "lastReceiptNo": "74"
        },
        {
            "_id": "5aad41f9ed2a6735d374524b",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:4D",
            "dateUploaded": "17-3-2018 05:27:37",
            "filename": "00_25_7E_03_93_4D#180317072652",
            "token": "180317072652",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "708.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "8.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "75",
            "lastReceiptNo": "78"
        },
        {
            "_id": "5aad42f0ed2a6735d374524d",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E7",
            "dateUploaded": "17-3-2018 05:31:44",
            "filename": "00_25_7E_03_93_E7#180317073253",
            "token": "180317073253",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "37.5",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "40",
            "lastReceiptNo": "41"
        },
        {
            "_id": "5aad5a1aed2a6735d374524f",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E7",
            "dateUploaded": "17-3-2018 07:10:34",
            "filename": "00_25_7E_03_93_E7#180317091143",
            "token": "180317091143",
            "flag": "U",
            "valueTransactionCount": "5",
            "valueTransactionAmount": "880.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "42",
            "lastReceiptNo": "46"
        },
        {
            "_id": "5aad95bfed2a6735d3745256",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "17-3-2018 11:25:03",
            "filename": "00_25_7E_03_93_E6#180318013833",
            "token": "180318013833",
            "flag": "U",
            "valueTransactionCount": "8",
            "valueTransactionAmount": "583.8",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "33",
            "lastReceiptNo": "44"
        },
        {
            "_id": "5aada769ed2a6735d3745258",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "18-3-2018 12:40:25",
            "filename": "00_25_7E_03_93_E6#180318025355",
            "token": "180318025355",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "267.5",
            "valueTransactionVoidCount": "2",
            "valueTransactionVoidAmount": "182.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "45",
            "lastReceiptNo": "51"
        },
        {
            "_id": "5aadad70ed2a6735d374525a",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "18-3-2018 01:06:08",
            "filename": "00_25_7E_03_93_E6#180318031940",
            "token": "180318031940",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "629.5",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "356.5",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "54",
            "lastReceiptNo": "57"
        },
        {
            "_id": "5aadb0a5ed2a6735d3745260",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "18-3-2018 01:19:49",
            "filename": "00_25_7E_03_93_E6#180318033320",
            "token": "180318033320",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "255.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "25.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "58",
            "lastReceiptNo": "61"
        },
        {
            "_id": "5aadb6a1ed2a6735d3745267",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:4D",
            "dateUploaded": "18-3-2018 01:45:21",
            "filename": "00_25_7E_03_93_4D#180317034437",
            "token": "180317034437",
            "flag": "U",
            "valueTransactionCount": "14",
            "valueTransactionAmount": "380.0",
            "valueTransactionVoidCount": "3",
            "valueTransactionVoidAmount": "111.0",
            "commodityTransactionCount": "4",
            "commodityTransactionAmount": "70.0",
            "commodityTransactionVoidCount": "30.0",
            "commodityTransactionVoidAmount": "2",
            "firstReceiptNo": "79",
            "lastReceiptNo": "101"
        },
        {
            "_id": "5aaec88aed2a6735d3745270",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "18-3-2018 09:14:02",
            "filename": "00_25_7E_03_93_E6#180319014247",
            "token": "180319014247",
            "flag": "U",
            "valueTransactionCount": "12",
            "valueTransactionAmount": "1921.4",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "2",
            "commodityTransactionAmount": "105.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "62",
            "lastReceiptNo": "75"
        },
        {
            "_id": "5aaf70fded2a6735d3745272",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "19-3-2018 09:12:45",
            "filename": "00_25_7E_03_93_E6#180319112620",
            "token": "180319112620",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "10.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "10.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "78",
            "lastReceiptNo": "79"
        },
        {
            "_id": "5aafc7f9ed2a6735d374527e",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:98:01",
            "dateUploaded": "19-3-2018 03:23:53",
            "filename": "00_25_7E_03_98_01#180319104913",
            "token": "180319104913",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "340.5",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "168.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "1643",
            "lastReceiptNo": "1654"
        },
        {
            "_id": "5ab0b6c1ed2a679fcf445d2f",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:D9",
            "dateUploaded": "20-3-2018 08:22:41",
            "filename": "00_25_7E_03_93_D9#180320125715",
            "token": "180320125715",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "20.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "12426",
            "lastReceiptNo": "12438"
        },
        {
            "_id": "5ab0b7e6ed2a679fcf445d30",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "20-3-2018 08:27:34",
            "filename": "00_25_7E_03_93_E6#180320104110",
            "token": "180320104110",
            "flag": "U",
            "valueTransactionCount": "5",
            "valueTransactionAmount": "135.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "80",
            "lastReceiptNo": "84"
        },
        {
            "_id": "5ab0c774ed2a679fcf445d33",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:98:01",
            "dateUploaded": "20-3-2018 09:33:56",
            "filename": "00_25_7E_03_98_01#180320045917",
            "token": "180320045917",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "591.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "1773",
            "lastReceiptNo": "1773"
        },
        {
            "_id": "5ab0d476ed2a679fcf445d35",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:D9",
            "dateUploaded": "20-3-2018 10:29:26",
            "filename": "00_25_7E_03_93_D9#180320030359",
            "token": "180320030359",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "10.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "12439",
            "lastReceiptNo": "12439"
        },
        {
            "_id": "5ab0eb27ed2a679fcf445d37",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:D9",
            "dateUploaded": "20-3-2018 12:06:15",
            "filename": "00_25_7E_03_93_D9#180320044051",
            "token": "180320044051",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "20.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "12440",
            "lastReceiptNo": "12441"
        },
        {
            "_id": "5ab0f480ed2a679fcf445d39",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "20-3-2018 12:46:08",
            "filename": "00_25_7E_03_93_E6#180320025944",
            "token": "180320025944",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "20.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "85",
            "lastReceiptNo": "85"
        },
        {
            "_id": "5ab0f852ed2a679fcf445d3b",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "20-3-2018 01:02:26",
            "filename": "00_25_7E_03_93_E6#180320031606",
            "token": "180320031606",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "30.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "86",
            "lastReceiptNo": "86"
        },
        {
            "_id": "5ab0fdb0ed2a679fcf445d3d",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E6",
            "dateUploaded": "20-3-2018 01:25:20",
            "filename": "00_25_7E_03_93_E6#180320033859",
            "token": "180320033859",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "10.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "87",
            "lastReceiptNo": "87"
        },
        {
            "_id": "5ab25cbbed2a679fcf445d3f",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:4D",
            "dateUploaded": "21-3-2018 02:23:07",
            "filename": "00_25_7E_03_93_4D#180321042236",
            "token": "180321042236",
            "flag": "U",
            "valueTransactionCount": "15",
            "valueTransactionAmount": "712.5",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "1",
            "commodityTransactionAmount": "10.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "102",
            "lastReceiptNo": "117"
        },
        {
            "_id": "5b45c91fed2a67fabe6b1ec7",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "11-7-2018 11:08:47",
            "filename": "00_25_7E_03_52_29#180711121828",
            "token": "180711121828",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "35.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "3",
            "lastReceiptNo": "3"
        },
        {
            "_id": "5b472ba3ed2a6721e608a264",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "12-7-2018 12:21:23",
            "filename": "00_25_7E_03_52_29#180712013107",
            "token": "180712013107",
            "flag": "U",
            "valueTransactionCount": "4",
            "valueTransactionAmount": "51.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "4",
            "lastReceiptNo": "7"
        },
        {
            "_id": "5b474f81ed2a672488f74b65",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "12-7-2018 02:54:25",
            "filename": "00_25_7E_03_52_29#180712040409",
            "token": "180712040409",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "49.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "8",
            "lastReceiptNo": "8"
        },
        {
            "_id": "5b475231ed2a672488f74b67",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "12-7-2018 03:05:53",
            "filename": "00_25_7E_03_52_29#180712041538",
            "token": "180712041538",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "13.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "9",
            "lastReceiptNo": "9"
        },
        {
            "_id": "5b475b90ed2a67255d6a542b",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "12-7-2018 03:45:52",
            "filename": "00_25_7E_03_52_29#180712045537",
            "token": "180712045537",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "25.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "10",
            "lastReceiptNo": "10"
        },
        {
            "_id": "5b475da3ed2a67255d6a542d",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "12-7-2018 03:54:43",
            "filename": "00_25_7E_03_52_29#180712050428",
            "token": "180712050428",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "18.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "11",
            "lastReceiptNo": "11"
        },
        {
            "_id": "5b485ceced2a672794911c3f",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "13-7-2018 10:03:56",
            "filename": "00_25_7E_03_52_29#180713111343",
            "token": "180713111343",
            "flag": "D",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "26.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "12",
            "lastReceiptNo": "12"
        },
        {
            "_id": "5b48974ded2a672a08e1aa1f",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "13-7-2018 02:13:01",
            "filename": "00_25_7E_03_52_29#180713032247",
            "token": "180713032247",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "27.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "14",
            "lastReceiptNo": "15"
        },
        {
            "_id": "5b489a44ed2a672a08e1aa23",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "13-7-2018 02:25:40",
            "filename": "00_25_7E_03_52_29#180713033527",
            "token": "180713033527",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "8.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "16",
            "lastReceiptNo": "16"
        },
        {
            "_id": "5b489db7ed2a672a08e1aa25",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "13-7-2018 02:40:23",
            "filename": "00_25_7E_03_52_29#180713035010",
            "token": "180713035010",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "67.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "17",
            "lastReceiptNo": "17"
        },
        {
            "_id": "5b4dc021ed2a67352eb5a2a2",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "17-7-2018 12:08:33",
            "filename": "00_25_7E_03_52_29#180717011831",
            "token": "180717011831",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "31.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "1",
            "commodityTransactionAmount": "30.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "19",
            "lastReceiptNo": "20"
        },
        {
            "_id": "5b4dc270ed2a6736362ad5c6",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:52:29",
            "dateUploaded": "17-7-2018 12:18:24",
            "filename": "00_25_7E_03_52_29#180717012823",
            "token": "180717012823",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "4.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "21",
            "lastReceiptNo": "21"
        },
        {
            "_id": "5b5036e5ed2a6738ae4b8055",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:04:E6:AE",
            "dateUploaded": "19-7-2018 08:59:49",
            "filename": "00_25_7E_04_E6_AE#180719090155",
            "token": "180719090155",
            "flag": "U",
            "valueTransactionCount": "0",
            "valueTransactionAmount": "0.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "1",
            "commodityTransactionAmount": "39600.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "2072",
            "lastReceiptNo": "2072"
        },
        {
            "_id": "5b59f604ed2a6749ab8394d5",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:38:46",
            "dateUploaded": "26-7-2018 06:25:40",
            "filename": "00_25_7E_03_38_46#180726072509",
            "token": "180726072509",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "800.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "400.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "3",
            "lastReceiptNo": "5"
        },
        {
            "_id": "5b6af2b9ed2a675d93aea669",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "08-8-2018 03:40:09",
            "filename": "00_25_7E_03_93_E8#180808101927",
            "token": "180808101927",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "76.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "2",
            "lastReceiptNo": "4"
        },
        {
            "_id": "5b6bf0a0ed2a675d93aea66b",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "09-8-2018 09:43:28",
            "filename": "00_25_7E_03_93_E8#180809042249",
            "token": "180809042249",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "1.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "5",
            "lastReceiptNo": "5"
        },
        {
            "_id": "5b714a0bed2a676fd7b940b6",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:38:46",
            "dateUploaded": "13-8-2018 11:06:19",
            "filename": "00_25_7E_03_38_46#180813053724",
            "token": "180813053724",
            "flag": "U",
            "valueTransactionCount": "5",
            "valueTransactionAmount": "6316.0",
            "valueTransactionVoidCount": "2",
            "valueTransactionVoidAmount": "1006.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "6",
            "lastReceiptNo": "12"
        },
        {
            "_id": "5b71502bed2a676fd7b940b8",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 11:32:27",
            "filename": "00_25_7E_03_93_E8#180813061158",
            "token": "180813061158",
            "flag": "U",
            "valueTransactionCount": "7",
            "valueTransactionAmount": "1268.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "6",
            "lastReceiptNo": "12"
        },
        {
            "_id": "5b7150dfed2a676fd7b940ba",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 11:35:27",
            "filename": "00_25_7E_03_93_E8#180813061459",
            "token": "180813061459",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "100.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "13",
            "lastReceiptNo": "13"
        },
        {
            "_id": "5b715362ed2a676fd7b940bc",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 11:46:10",
            "filename": "00_25_7E_03_93_E8#180813062542",
            "token": "180813062542",
            "flag": "U",
            "valueTransactionCount": "4",
            "valueTransactionAmount": "555.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "14",
            "lastReceiptNo": "17"
        },
        {
            "_id": "5b71598ced2a676fd7b940be",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 12:12:28",
            "filename": "00_25_7E_03_93_E8#180813065200",
            "token": "180813065200",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "200.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "18",
            "lastReceiptNo": "20"
        },
        {
            "_id": "5b715ae5ed2a676fd7b940c0",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 12:18:13",
            "filename": "00_25_7E_03_93_E8#180813065745",
            "token": "180813065745",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "160.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "21",
            "lastReceiptNo": "22"
        },
        {
            "_id": "5b715bd8ed2a676fd7b940c2",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 12:22:16",
            "filename": "00_25_7E_03_93_E8#180813070148",
            "token": "180813070148",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "433.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "23",
            "lastReceiptNo": "23"
        },
        {
            "_id": "5b715c95ed2a676fd7b940c4",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 12:25:25",
            "filename": "00_25_7E_03_93_E8#180813070457",
            "token": "180813070457",
            "flag": "F",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "340.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "24",
            "lastReceiptNo": "24"
        },
        {
            "_id": "5b715d49ed2a676fd7b940c6",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 12:28:25",
            "filename": "00_25_7E_03_93_E8#180813070757",
            "token": "180813070757",
            "flag": "D",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "10.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "25",
            "lastReceiptNo": "25"
        },
        {
            "_id": "5b715eb8ed2a676fd7b940c8",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 12:34:32",
            "filename": "00_25_7E_03_93_E8#180813071404",
            "token": "180813071404",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "14.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "26",
            "lastReceiptNo": "26"
        },
        {
            "_id": "5b71898aed2a676fd7b940ca",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "13-8-2018 03:37:14",
            "filename": "00_25_7E_03_93_E8#180813101645",
            "token": "180813101645",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "385.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "27",
            "lastReceiptNo": "28"
        },
        {
            "_id": "5b729abced2a676fd7b94117",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "14-8-2018 11:02:52",
            "filename": "00_25_7E_03_93_E8#180814054227",
            "token": "180814054227",
            "flag": "U",
            "valueTransactionCount": "3",
            "valueTransactionAmount": "643.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "1",
            "commodityTransactionAmount": "6000.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "29",
            "lastReceiptNo": "34"
        },
        {
            "_id": "5b72a75fed2a6773178fbedf",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "14-8-2018 11:56:47",
            "filename": "00_25_7E_03_93_E8#180814063621",
            "token": "180814063621",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "316.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "35",
            "lastReceiptNo": "36"
        },
        {
            "_id": "5b72c1a9ed2a6773178fbee2",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "14-8-2018 01:48:57",
            "filename": "00_25_7E_03_93_E8#180814082832",
            "token": "180814082832",
            "flag": "U",
            "valueTransactionCount": "6",
            "valueTransactionAmount": "362.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "1",
            "commodityTransactionAmount": "16550.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "37",
            "lastReceiptNo": "43"
        },
        {
            "_id": "5b73d303ed2a6773178fbee4",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "15-8-2018 09:15:15",
            "filename": "00_25_7E_03_93_E8#180815035452",
            "token": "180815035452",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "160.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "44",
            "lastReceiptNo": "44"
        },
        {
            "_id": "5b73dbc2ed2a6773178fbee6",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "15-8-2018 09:52:34",
            "filename": "00_25_7E_03_93_E8#180815043146",
            "token": "180815043146",
            "flag": "U",
            "valueTransactionCount": "4",
            "valueTransactionAmount": "574.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "45",
            "lastReceiptNo": "48"
        },
        {
            "_id": "5b76ba13ed2a6773178fbee8",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "17-8-2018 02:05:39",
            "filename": "00_25_7E_03_93_E8#180817030542",
            "token": "180817030542",
            "flag": "D",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "10.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "49",
            "lastReceiptNo": "49"
        },
        {
            "_id": "5b76d7baed2a6773178fbeec",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "17-8-2018 04:12:10",
            "filename": "00_25_7E_03_93_E8#180817051213",
            "token": "180817051213",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "40.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "50",
            "lastReceiptNo": "50"
        },
        {
            "_id": "5bb48800ed2a6773178fbefe",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "03-10-2018 11:12:32",
            "filename": "00_25_7E_03_93_E8#181003121438",
            "token": "181003121438",
            "flag": "U",
            "valueTransactionCount": "4",
            "valueTransactionAmount": "225.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "100.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "52",
            "lastReceiptNo": "56"
        },
        {
            "_id": "5bb5d335ed2a6773178fbf00",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "04-10-2018 10:45:41",
            "filename": "00_25_7E_03_93_E8#181004114747",
            "token": "181004114747",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "25.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "57",
            "lastReceiptNo": "57"
        },
        {
            "_id": "5bb5d4e6ed2a6773178fbf02",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E8",
            "dateUploaded": "04-10-2018 10:52:54",
            "filename": "00_25_7E_03_93_E8#181004115501",
            "token": "181004115501",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "23.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "58",
            "lastReceiptNo": "59"
        },
        {
            "_id": "5bc070e1ed2a6773178fbf07",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:B7",
            "dateUploaded": "12-10-2018 12:01:05",
            "filename": "00_25_7E_03_93_B7#181012011529",
            "token": "181012011529",
            "flag": "U",
            "valueTransactionCount": "1",
            "valueTransactionAmount": "50.0",
            "valueTransactionVoidCount": "0",
            "valueTransactionVoidAmount": "0.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "36",
            "lastReceiptNo": "36"
        },
        {
            "_id": "5bc8601ced2a6773178fbf0b",
            "_class": "com.lynx.dal.models.ZFileVO",
            "macAddress": "00:25:7E:03:93:E9",
            "dateUploaded": "18-10-2018 12:27:40",
            "filename": "00_25_7E_03_93_E9#181018020100",
            "token": "181018020100",
            "flag": "U",
            "valueTransactionCount": "2",
            "valueTransactionAmount": "4000.0",
            "valueTransactionVoidCount": "1",
            "valueTransactionVoidAmount": "1000.0",
            "commodityTransactionCount": "0",
            "commodityTransactionAmount": "0.0",
            "commodityTransactionVoidCount": "0.0",
            "commodityTransactionVoidAmount": "0",
            "firstReceiptNo": "58",
            "lastReceiptNo": "60"
        }
    ]
};


/***/ }),

/***/ "./src/app/switch/transactions/transaction-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/switch/transactions/transaction-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    height:89vh;\r\n    overflow-y:scroll;\r\n}\r\nmat-card{\r\n    width:150%;\r\n    margin:5px;\r\n}\r\ntable{\r\n    width:100%;\r\n}\r\ntr:hover{\r\n    /*background-color: aliceblue;*/\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/switch/transactions/transaction-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/switch/transactions/transaction-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"body\">\r\n    <mat-card>\r\n        <form *ngIf = \"showtxnFormGroup\" [formGroup] = \"transactionFilesFormGroup\" (ngSubmit) = \"updateTransaction()\">\r\n            <table border = \"0\">\r\n                <tr>\r\n                    <td>\r\n                        <div>\r\n                            <label for = \"macAddress\" class = \"field-label\">macaddress</label><br>\r\n                            <mat-form-field class = \"device-input\">\r\n                                <input matInput  type = \"text\"  formControlName = \"macAddress\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div>\r\n                            <label for = \"dateUploaded\" class = \"field-label\">date Uploaded</label><br>\r\n                            <mat-form-field class = \"device-input\">\r\n                                <input matInput   formControlName = \"dateUploaded\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div>\r\n                            <label for = \"filename\" class = \"field-label\">filename</label><br>\r\n                            <mat-form-field class = \"device-input\">\r\n                                <input matInput   formControlName = \"filename\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td></td>\r\n                    <td>\r\n                        <div>\r\n                            <label for = \"firstReceiptNo\" class = \"field-label\">first receipt</label><br>\r\n                            <mat-form-field class = \"device-input\">\r\n                                <input matInput   formControlName = \"firstReceiptNo\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div>\r\n                            <label for = \"lastReceiptNo\" class = \"field-label\">last receipt</label><br>\r\n                            <mat-form-field class = \"device-input\">\r\n                                <input matInput   formControlName = \"lastReceiptNo\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <div>\r\n                            <label for = \"token\" class = \"field-label\">token</label><br>\r\n                            <mat-form-field class = \"device-input\">\r\n                                <input matInput   formControlName = \"token\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div>\r\n                            <label for = \"valueTransactionAmount\" class = \"field-label\">value transaction amount</label><br>\r\n                            <mat-form-field class = \"device-input\">\r\n                                <input matInput   formControlName = \"valueTransactionAmount\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div>\r\n                        <label for = \"commodityTransactionAmount\" class = \"field-label\">commodity transaction amount</label><br>\r\n                        <mat-form-field class = \"device-input\">\r\n                            <input matInput   formControlName = \"commodityTransactionAmount\" />\r\n                        </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td></td>\r\n                    <td>\r\n                        <div>\r\n                                <mat-form-field>\r\n                                        <mat-select placeholder={{transactionFile.flag}}>\r\n                                          <mat-option *ngFor=\"let flag of flagOptions\" [value]=\"flag\">\r\n                                            {{flag}}\r\n                                          </mat-option>\r\n                                        </mat-select>\r\n                                      </mat-form-field>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <button mat-raised-button style = \"background-color:teal;position: relative;margin-left:30%;margin-right:70%\" (click) = \"updateTxn()\">update</button>\r\n        </form>\r\n        <mat-divider></mat-divider>\r\n        <mat-form-field class = \"filterField\">\r\n            <input  matInput (keyup)= \"filterTransactions($event.target.value)\" placeholder=\"Filter\">\r\n          </mat-form-field>\r\n          <table *ngIf = \"showtransactions\" mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\r\n\r\n              <!-- voucherno Column -->\r\n              <ng-container matColumnDef=\"voucherno\">\r\n                <th mat-header-cell *matHeaderCellDef> voucherno </th>\r\n                <td mat-cell *matCellDef=\"let transaction\" > {{transaction.voucherno}} </td>\r\n              </ng-container>\r\n\r\n              <!--  cardno Column -->\r\n              <ng-container matColumnDef=\"cardno\">\r\n                <th mat-header-cell *matHeaderCellDef> cardno </th>\r\n                <td mat-cell *matCellDef=\"let transaction\" > {{transaction.cardno}} </td>\r\n              </ng-container>\r\n\r\n              <!-- iccid Column -->\r\n              <ng-container matColumnDef=\"iccid\">\r\n                <th mat-header-cell *matHeaderCellDef>iccid</th>\r\n                <td mat-cell *matCellDef=\"let transaction\" > {{transaction.iccid}} </td>\r\n              </ng-container>\r\n\r\n              <!-- rcpt  Column -->\r\n              <ng-container matColumnDef=\"rcpt\">\r\n                  <th mat-header-cell *matHeaderCellDef>rcpt</th>\r\n                  <td mat-cell *matCellDef=\"let transaction\" > {{transaction.rcpt }} </td>\r\n              </ng-container>\r\n\r\n              <!-- username  Column -->\r\n              <ng-container matColumnDef=\"username\">\r\n                  <th mat-header-cell *matHeaderCellDef>username</th>\r\n                  <td mat-cell *matCellDef=\"let transaction\" > {{transaction.username }} </td>\r\n              </ng-container>\r\n              <!-- date  Column -->\r\n              <ng-container matColumnDef=\"date\">\r\n                  <th mat-header-cell *matHeaderCellDef>date</th>\r\n                  <td mat-cell *matCellDef=\"let transaction\" > {{transaction.date }} </td>\r\n              </ng-container>\r\n\r\n               <!-- txns  Column -->\r\n              <ng-container matColumnDef=\"txns\">\r\n                  <th mat-header-cell *matHeaderCellDef>transactions</th>\r\n                  <td mat-cell *matCellDef=\"let transaction\" > {{transaction.txns }} </td>\r\n              </ng-container>\r\n\r\n                  <!-- latitude  Column -->\r\n              <ng-container matColumnDef=\"latitude\">\r\n                  <th mat-header-cell *matHeaderCellDef>latitude</th>\r\n                  <td mat-cell *matCellDef=\"let transaction\" > {{transaction.latitude }} </td>\r\n              </ng-container>\r\n                <!-- longitude  Column -->\r\n                <ng-container matColumnDef=\"longitude\">\r\n                    <th mat-header-cell *matHeaderCellDef>longitude</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.longitude }} </td>\r\n                </ng-container>\r\n\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n          <div>\r\n          <mat-paginator [length]= \"dataLength\"\r\n                        [pageSize]=\"pageSize\"\r\n                        [pageSizeOptions]=\"[2, 3, 5, 10, 25, 100]\"\r\n                        (page) = \"pageEvent = $event\" (page) = \"paginateValues(pageEvent.pageSize,pageEvent.pageIndex)\">\r\n          </mat-paginator >\r\n          </div>\r\n    </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/switch/transactions/transaction-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/switch/transactions/transaction-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailComponent", function() { return TransactionDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch/switch.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_PaginatorFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/PaginatorFunction */ "./src/app/common/PaginatorFunction.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionDetailComponent = /** @class */ (function () {
    function TransactionDetailComponent(route, switchService) {
        this.route = route;
        this.switchService = switchService;
        this.showtxnFormGroup = false;
        this.showtransactions = false;
        this.flagOptions = ["P", "U", "F", "D"];
        //displayedColumns = ['voucherno','cardno','iccid','txntype','oid','rcpt','voc','ddv','username','date','macaddress','txns','auth','latitude','longitude'];
        this.displayedColumns = ['voucherno', 'cardno', 'iccid', 'rcpt', 'username', 'date', 'txns', 'latitude', 'longitude'];
        this.pageIndex = 0;
        this.pageSize = 30;
        // this.createFormGroup();
    }
    TransactionDetailComponent.prototype.createFormGroup = function () {
        this.transactionFilesFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            macAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.transactionFile.macAddress, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            dateUploaded: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.transactionFile.dateUploaded, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            filename: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.transactionFile.filename, diabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            token: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.transactionFile.token, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            flag: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.transactionFile.flag }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            valueTransactionCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.transactionFile.valueTransactionCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            valueTransactionAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.transactionFile.valueTransactionAmount, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            valueTransactionVoidCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.transactionFile.valueTransactionVoidCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            valueTransactionVoidAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.transactionFile.valueTransactionVoidAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            commodityTransactionCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.transactionFile.commodityTransactionCount, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            commodityTransactionAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.transactionFile.commodityTransactionAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            commodityTransactionVoidCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.transactionFile.commodityTransactionVoidCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            commodityTransactionVoidAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.transactionFile.commodityTransactionVoidAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            firstReceiptNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.transactionFile.firstReceiptNo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastReceiptNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.transactionFile.lastReceiptNo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    TransactionDetailComponent.prototype.fetchDeviceByToken = function (token) {
        var _this = this;
        console.log("watch here..");
        new Promise(function (resolve, reject) {
            resolve(_this.switchService.fetchTransactionFileByToken(token).subscribe(function (data) { console.log(_this.transactionFile), _this.transactionFile = data; _this.transactionFileCopy = data; console.log(data); }));
        }).then(function (done) {
            _this.createFormGroup();
            _this.showtxnFormGroup = true;
            _this.fetchTransactions(_this.transactionFilesFormGroup.get('filename').value);
        });
        //this.switchService.fetchTransactionFileByToken(token).subscribe(data =>{console.log(this.transactionFile),this.transactionFile = data;this.transactionFileCopy = data;console.log(data)});
    };
    TransactionDetailComponent.prototype.updateTransaction = function () {
    };
    TransactionDetailComponent.prototype.fetchTransactions = function (filename) {
        var _this = this;
        new Promise(function (resolve, reject) {
            resolve(_this.switchService.fetchBatchTransactionsByFilename(filename).subscribe(function (data) {
                _this.transactions = data.response_message.slice(0, _this.pageSize);
                _this.dataLength = data.response_message.length;
                _this.transactionsCopy = data.response_message;
                _this.paginatedTransactions = data.response_message;
                console.log(data);
            }));
        }).then(function (done) {
            _this.showtransactions = true;
        });
        //this.switchService.fetchBatchTransactionsByFilename(filename).subscribe(data =>{this.transactions = data.response_message;console.log(data);});
    };
    TransactionDetailComponent.prototype.filterTransactions = function (text) {
        queryString = text;
        this.transactions = this.transactionsCopy.filter(this.filterTransaction).slice(0, this.pageSize);
    };
    TransactionDetailComponent.prototype.filterTransaction = function (transaction) {
        var patt = new RegExp(queryString, "i");
        if (patt.test(transaction.voucherno) || patt.test(transaction.cardno) || patt.test(transaction.iccid) || patt.test(transaction.txntype) || patt.test(transaction.oid) ||
            patt.test(transaction.rcpt) || patt.test(transaction.voc) || patt.test(transaction.ddv) || patt.test(transaction.username || patt.test(transaction.date) ||
            patt.test(transaction.macaddress) || patt.test(transaction.txns) || patt.test(transaction.auth) || patt.test(transaction.latitude) || patt.test(transaction.longitude))) {
            return transaction;
        }
        return;
    };
    TransactionDetailComponent.prototype.paginateValues = function (pageSize, pageIndex) {
        this.transactions = Object(_common_PaginatorFunction__WEBPACK_IMPORTED_MODULE_4__["paginatorFunction"])(this.paginatedTransactions, pageSize, pageIndex);
        console.log(this.transactions);
    };
    TransactionDetailComponent.prototype.updateTxn = function () {
        console.log("will update txn");
    };
    TransactionDetailComponent.prototype.ngOnInit = function () {
        this.fetchDeviceByToken(this.route.snapshot.paramMap.get("token"));
    };
    TransactionDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'transaction-details',
            template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/switch/transactions/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.css */ "./src/app/switch/transactions/transaction-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _switch_service__WEBPACK_IMPORTED_MODULE_2__["SwitchService"]])
    ], TransactionDetailComponent);
    return TransactionDetailComponent;
}());

var queryString = "";


/***/ }),

/***/ "./src/app/switch/transactions/transactions.component.css":
/*!****************************************************************!*\
  !*** ./src/app/switch/transactions/transactions.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    height:89vh;\r\n   overflow-y:scroll;\r\n    \r\n}\r\nmat-card{\r\n    width:150%;\r\n    margin:5px;\r\n}\r\ntable{\r\n    width:100%;\r\n}\r\ntr:hover{\r\n    background-color: darkgray;\r\n}\r\n"

/***/ }),

/***/ "./src/app/switch/transactions/transactions.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/switch/transactions/transactions.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"body\">\r\n    <mat-card>\r\n            <mat-form-field class = \"filterField\">\r\n              <input  matInput (keyup)= \"filterTransactionFiles($event.target.value)\" placeholder=\"Filter\">\r\n            </mat-form-field>\r\n            <table mat-table [dataSource]=\"transactionFiles\" class=\"mat-elevation-z8\">\r\n\r\n                <!-- macAddress Column -->\r\n                <ng-container matColumnDef=\"macAddress\">\r\n                  <th mat-header-cell *matHeaderCellDef> macaddress </th>\r\n                  <td mat-cell *matCellDef=\"let transaction\" > {{transaction.macAddress}} </td>\r\n                </ng-container>\r\n\r\n                <!--  dateUploaded Column -->\r\n                <ng-container matColumnDef=\"dateUploaded\">\r\n                  <th mat-header-cell *matHeaderCellDef> date uploaded </th>\r\n                  <td mat-cell *matCellDef=\"let transaction\" > {{transaction.dateUploaded}} </td>\r\n                </ng-container>\r\n\r\n                <!-- flag  Column -->\r\n                <ng-container matColumnDef=\"flag\">\r\n                  <th mat-header-cell *matHeaderCellDef>flag</th>\r\n                  <td mat-cell *matCellDef=\"let transaction\" > {{transaction.flag }} </td>\r\n                </ng-container>\r\n                <!-- valueTransactionCount  Column -->\r\n                <ng-container matColumnDef=\"valueTransactionCount\">\r\n                    <th mat-header-cell *matHeaderCellDef>value txn count</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.valueTransactionCount }} </td>\r\n                </ng-container>\r\n                <!-- valueTransactionAmount  Column -->\r\n                <ng-container matColumnDef=\"valueTransactionAmount\">\r\n                    <th mat-header-cell *matHeaderCellDef>value txn amount</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.valueTransactionAmount }} </td>\r\n                </ng-container>\r\n                <!-- valueTransactionVoidCount  Column -->\r\n                <ng-container matColumnDef=\"valueTransactionVoidCount\">\r\n                    <th mat-header-cell *matHeaderCellDef>value txn void count</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.valueTransactionVoidCount }} </td>\r\n                </ng-container>\r\n                <!-- valueTransactionVoidAmount  Column -->\r\n                <ng-container matColumnDef=\"valueTransactionVoidAmount\">\r\n                    <th mat-header-cell *matHeaderCellDef>value txn void amt</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.valueTransactionVoidAmount }} </td>\r\n                </ng-container>\r\n                <!-- commodityTransactionCount  Column -->\r\n                <ng-container matColumnDef=\"commodityTransactionCount\">\r\n                    <th mat-header-cell *matHeaderCellDef>commodity txn  count</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.commodityTransactionCount }} </td>\r\n                </ng-container>\r\n                <!-- commodityTransactionAmount  Column -->\r\n                <ng-container matColumnDef=\"commodityTransactionAmount\">\r\n                    <th mat-header-cell *matHeaderCellDef>commodity txn  amt</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.commodityTransactionAmount }} </td>\r\n                </ng-container>\r\n                 <!-- commodityTransactionVoidCount  Column -->\r\n                <ng-container matColumnDef=\"commodityTransactionVoidCount\">\r\n                    <th mat-header-cell *matHeaderCellDef>commodity txn void count</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.commodityTransactionVoidCount }} </td>\r\n                </ng-container>\r\n                    <!-- commodityTransactionVoidAmount  Column -->\r\n                <ng-container matColumnDef=\"commodityTransactionVoidAmount\">\r\n                    <th mat-header-cell *matHeaderCellDef>commodity txn void amount</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.commodityTransactionVoidAmount }} </td>\r\n                </ng-container>\r\n                    <!-- lastReceiptNo  Column -->\r\n                <ng-container matColumnDef=\"lastReceiptNo\">\r\n                    <th mat-header-cell *matHeaderCellDef>last receipt</th>\r\n                    <td mat-cell *matCellDef=\"let transaction\" > {{transaction.lastReceiptNo }} </td>\r\n                </ng-container>\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click) = \"navigateToTransactionDetails(row.token)\"></tr>\r\n              </table>\r\n            <div>\r\n            <mat-paginator [length]= \"dataLength\"\r\n                          [pageSize]=\"pageSize\"\r\n                          [pageSizeOptions]=\"[2, 3, 5, 10, 25, 100]\"\r\n                          (page) = \"pageEvent = $event\" (page) = \"paginateValues(pageEvent.pageSize,pageEvent.pageIndex)\">\r\n            </mat-paginator >\r\n            </div>\r\n          </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/switch/transactions/transactions.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/switch/transactions/transactions.component.ts ***!
  \***************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _switch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../switch.service */ "./src/app/switch/switch.service.ts");
/* harmony import */ var _common_PaginatorFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/PaginatorFunction */ "./src/app/common/PaginatorFunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(switchService, router) {
        this.switchService = switchService;
        this.router = router;
        this.displayedColumns = ['macAddress', 'dateUploaded', 'flag', 'valueTransactionCount', 'valueTransactionAmount',
            'valueTransactionVoidCount', 'valueTransactionVoidAmount', 'commodityTransactionCount', 'commodityTransactionAmount', 'commodityTransactionVoidCount',
            'commodityTransactionVoidAmount', 'lastReceiptNo'];
        this.pageIndex = 0;
        this.pageSize = 30;
    }
    TransactionsComponent.prototype.fetchTransactionFiles = function () {
        var _this = this;
        this.switchService.fetchTransactionFiles().subscribe(function (data) {
            _this.dataLength = data.response_message.length;
            _this.transactionFiles = data.response_message.slice(0, _this.pageSize);
            _this.transactionFilesCopy = data.response_message;
            _this.paginatedTransactionFiles = data.response_message;
            console.log(data);
        });
    };
    TransactionsComponent.prototype.filterTransactionFiles = function (text) {
        queryString = text;
        this.transactionFiles = this.transactionFilesCopy.filter(this.filterTransactionFile);
    };
    TransactionsComponent.prototype.filterTransactionFile = function (transactionfile) {
        var patt = new RegExp(queryString, "i");
        if (patt.test(transactionfile.macAddress) || patt.test(transactionfile.dateUploaded) || patt.test(transactionfile.filename) || patt.test(transactionfile.token) || patt.test(transactionfile.flag)) {
            return transactionfile;
        }
        return;
    };
    TransactionsComponent.prototype.paginateValues = function (pageSize, pageIndex) {
        this.transactionFiles = Object(_common_PaginatorFunction__WEBPACK_IMPORTED_MODULE_3__["paginatorFunction"])(this.paginatedTransactionFiles, pageSize, pageIndex);
    };
    TransactionsComponent.prototype.navigateToTransactionDetails = function (token) {
        console.log("watching...");
        console.log(token);
        this.router.navigate(['/layout/switch/transactions', token]);
    };
    TransactionsComponent.prototype.ngOnInit = function () {
        this.fetchTransactionFiles();
        this.pageSize = 15;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.transactionFiles);
        //this.dataLength = 4;
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/switch/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/switch/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [_switch_service__WEBPACK_IMPORTED_MODULE_2__["SwitchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());

var queryString = "";


/***/ }),

/***/ "./src/app/switch/zsequence/zsequence.component.css":
/*!**********************************************************!*\
  !*** ./src/app/switch/zsequence/zsequence.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    min-height:89vh;\r\n}"

/***/ }),

/***/ "./src/app/switch/zsequence/zsequence.component.html":
/*!***********************************************************!*\
  !*** ./src/app/switch/zsequence/zsequence.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"body\">\r\n    <h3>Render z sequence here</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/switch/zsequence/zsequence.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/switch/zsequence/zsequence.component.ts ***!
  \*********************************************************/
/*! exports provided: ZsequenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZsequenceComponent", function() { return ZsequenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ZsequenceComponent = /** @class */ (function () {
    function ZsequenceComponent() {
    }
    ZsequenceComponent.prototype.ngOnInit = function () {
    };
    ZsequenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'zsequence',
            template: __webpack_require__(/*! ./zsequence.component.html */ "./src/app/switch/zsequence/zsequence.component.html"),
            styles: [__webpack_require__(/*! ./zsequence.component.css */ "./src/app/switch/zsequence/zsequence.component.css")]
        })
    ], ZsequenceComponent);
    return ZsequenceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=switch-switch-module.js.map