(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*testing css of simulation*/\nheader {\n  background: #a44fb522;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCO0VBQ0Usc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRlc3RpbmcgY3NzIG9mIHNpbXVsYXRpb24qL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2E0NGZiNTIyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n    <div id=\"title\"><h1>{{title}}</h1></div>\n</div>\n<div class=\"clear\"></div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(data, router) {
        this.data = data;
        this.router = router;
        this.title = 'KLAW Web';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./simulator/simulator.component */ "./src/app/simulator/simulator.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_save_procedure_save_procedure_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/save-procedure/save-procedure.component */ "./src/app/components/save-procedure/save-procedure.component.ts");
/* harmony import */ var _components_blockly_editor_blockly_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/blockly-editor/blockly-editor.component */ "./src/app/components/blockly-editor/blockly-editor.component.ts");
/* harmony import */ var _components_robot_connection_robot_connection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/robot-connection/robot-connection.component */ "./src/app/components/robot-connection/robot-connection.component.ts");
/* harmony import */ var _components_robot_connection_dialog_robot_connection_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/robot-connection-dialog/robot-connection-dialog.component */ "./src/app/components/robot-connection-dialog/robot-connection-dialog.component.ts");
/* harmony import */ var _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile-settings/profile-settings.component */ "./src/app/components/profile-settings/profile-settings.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_start_control_start_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/start-control/start-control.component */ "./src/app/components/start-control/start-control.component.ts");
/* harmony import */ var _services_robot_connection_robot_connection_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/robot-connection/robot-connection.service */ "./src/app/services/robot-connection/robot-connection.service.ts");



















var routes = [
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
    },
    {
        path: 'main',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
    },
    {
        path: '**',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_7__["SimulatorComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _components_save_procedure_save_procedure_component__WEBPACK_IMPORTED_MODULE_11__["SaveProcedureComponent"],
                _components_blockly_editor_blockly_editor_component__WEBPACK_IMPORTED_MODULE_12__["BlocklyEditorComponent"],
                _components_robot_connection_robot_connection_component__WEBPACK_IMPORTED_MODULE_13__["RobotConnectionComponent"],
                _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_15__["ProfileSettingsComponent"],
                _components_robot_connection_dialog_robot_connection_dialog_component__WEBPACK_IMPORTED_MODULE_14__["RobotConnectionDialogComponent"],
                _components_start_control_start_control_component__WEBPACK_IMPORTED_MODULE_17__["StartControlComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"]
            ],
            entryComponents: [
                _components_robot_connection_dialog_robot_connection_dialog_component__WEBPACK_IMPORTED_MODULE_14__["RobotConnectionDialogComponent"]
            ],
            providers: [_services_robot_connection_robot_connection_service__WEBPACK_IMPORTED_MODULE_18__["RobotConnectionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blockly-editor/blockly-blocks/blocks.js":
/*!********************************************************************!*\
  !*** ./src/app/components/blockly-editor/blockly-blocks/blocks.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Blockly.Blocks['move_arm'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move robot arm to (")
          .appendField(new Blockly.FieldNumber(0), "armX")
          .appendField(",")
          .appendField(new Blockly.FieldNumber(0), "armY")
          .appendField(").");
      this.appendDummyInput()
          .appendField("Is robot elbow up?")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "isElbowUp");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(130);
    }
  };
  
  Blockly.JavaScript['move_arm'] = function(block) {
    var numberArmX = block.getFieldValue('armX');
    var numberArmY = block.getFieldValue('armY');
    var checkboxIsElbowUp = block.getFieldValue('isElbowUp') == 'TRUE';
    // TODO: Assemble JavaScript into code variable.
    var code = 'moveArm(' + numberArmX + ',' + numberArmY + ',' + checkboxIsElbowUp + ');';

    return code;
  };
  
  Blockly.Blocks['move_claw'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move claw")
          .appendField(new Blockly.FieldTextInput("0"), "distanceBetweenFingersInCentimeters")
          .appendField("centimeters apart");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
    }
  };
  
  Blockly.JavaScript['move_claw'] = function(block) {
    var distanceBetweenFingersInCentimeters = block.getFieldValue('distanceBetweenFingersInCentimeters');
    // TODO: Assemble JavaScript into code variable.
    var code = 'moveClaw(' + distanceBetweenFingersInCentimeters + ');';
    return code;
  };
  
  Blockly.Blocks['wait'] = {
    init: function() {
      this.appendDummyInput("wait")
          .appendField("Wait for")
          .appendField(new Blockly.FieldNumber(0), "waitInMilliseconds")
          .appendField("milliseconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
    }
  };
  
  Blockly.JavaScript['wait'] = function(block) {
    var numberWaitInMilliseconds = block.getFieldValue('waitInMilliseconds');
    // TODO: Assemble JavaScript into code variable.
    var code = 'wait(' + numberWaitInMilliseconds + ');';
    return code;
  };


/***/ }),

/***/ "./src/app/components/blockly-editor/blockly-editor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/blockly-editor/blockly-editor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pc-tab\">\n<input checked=\"checked\" id=\"tab1\" type=\"radio\" name=\"pct\" />\n<input id=\"tab2\" type=\"radio\" name=\"pct\" />\n  <nav>\n    <ul>\n      <li class=\"tab1\">\n        <label for=\"tab1\" #blockCode>Block Code</label>\n      </li>\n      <li class=\"tab2\">\n        <label for=\"tab2\">XML</label>\n      </li>\n    </ul>\n  </nav>\n  <section>\n    <div class=\"tab1\">\n      <h2>Block Code</h2>\n      <div id=\"blocklyDiv\"></div>\n        <xml id=\"toolbox\" #toolbox style=\"display: none\">\n                <category name=\"Robot\">\n                        <block type=\"move_arm\"></block>\n                        <block type=\"move_claw\"></block>\n                        <block type=\"wait\"></block>\n                </category>\n        </xml>\n\n    </div>\n    <div class=\"tab2\">\n      <h2>XML</h2>\n      <textarea id=\"xmlText\"></textarea>\n      <button mat-stroked-button (click)='blockCode.click(); xmlUpdate();'> \n        <mat-icon>code</mat-icon>\n        Update Code Blocks\n      </button>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blockly-editor/blockly-editor.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/blockly-editor/blockly-editor.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pc-tab > input,\n.pc-tab section > div {\n  display: none; }\n\n#tab1:checked ~ section .tab1,\n#tab2:checked ~ section .tab2,\n#tab3:checked ~ section .tab3 {\n  display: block; }\n\n#tab1:checked ~ nav .tab1,\n#tab2:checked ~ nav .tab2,\n#tab3:checked ~ nav .tab3 {\n  color: red; }\n\n*, *:after, *:before {\n  box-sizing: border-box; }\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  background: #ecf0f1; }\n\n.pc-tab {\n  width: 100%;\n  max-width: 750px;\n  margin: 0 auto; }\n\n.pc-tab ul {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n\n.pc-tab ul li label {\n      float: left;\n      padding: 15px 25px;\n      border: 1px solid #ddd;\n      border-bottom: 0;\n      background: #eeeeee;\n      color: #444; }\n\n.pc-tab ul li label:hover {\n        background: #dddddd; }\n\n.pc-tab ul li label:active {\n        background: #ffffff; }\n\n.pc-tab ul li:not(:last-child) label {\n      border-right-width: 0; }\n\n.pc-tab section {\n    clear: both; }\n\n.pc-tab section div {\n      padding: 20px;\n      width: 100%;\n      border: 1px solid #ddd;\n      background: #fff;\n      line-height: 1.5em;\n      letter-spacing: 0.3px;\n      color: #444; }\n\n.pc-tab section div h2 {\n        margin: 0;\n        letter-spacing: 1px;\n        color: #34495e; }\n\n#tab1:checked ~ nav .tab1 label,\n#tab2:checked ~ nav .tab2 label,\n#tab3:checked ~ nav .tab3 label {\n  background: white;\n  color: #111;\n  position: relative; }\n\n#tab1:checked ~ nav .tab1 label:after,\n  #tab2:checked ~ nav .tab2 label:after,\n  #tab3:checked ~ nav .tab3 label:after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    background: #ffffff;\n    left: 0;\n    bottom: -1px; }\n\n#blocklyDiv {\n  line-height: 500px;\n  height: 480px;\n  width: 700px; }\n\n#xmlText {\n  height: 437px;\n  width: 700px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DaHJpcy9LTEFXLVdlYi9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvYmxvY2tseS1lZGl0b3IvYmxvY2tseS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsY0FBYSxFQUNkOztBQUVEOzs7RUFHRSxlQUFjLEVBQ2Y7O0FBRUQ7OztFQUdFLFdBQVUsRUFDWDs7QUFNRDtFQUdFLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGVBQWMsRUEwQ2Y7O0FBN0NEO0lBS0ksaUJBQWdCO0lBQ2hCLFVBQVM7SUFDVCxXQUFVLEVBb0JYOztBQTNCSDtNQVVRLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsdUJBQXNCO01BQ3RCLGlCQUFnQjtNQUNoQixvQkE1QmU7TUE2QmYsWUFBVyxFQU9aOztBQXRCUDtRQWlCVSxvQkE5QmtCLEVBK0JuQjs7QUFsQlQ7UUFvQlUsb0JBbkNXLEVBb0NaOztBQXJCVDtNQXdCUyxzQkFBcUIsRUFDdkI7O0FBekJQO0lBNkJJLFlBQVcsRUFlWjs7QUE1Q0g7TUErQk0sY0FBYTtNQUNiLFlBQVc7TUFDWCx1QkFBc0I7TUFDdEIsaUJBQWdCO01BQ2hCLG1CQUFrQjtNQUNsQixzQkFBcUI7TUFDckIsWUFBVyxFQU1aOztBQTNDTDtRQXVDUSxVQUFTO1FBQ1Qsb0JBQW1CO1FBQ25CLGVBQWMsRUFDZjs7QUFLUDs7O0VBSUksa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxtQkFBa0IsRUFXbkI7O0FBakJIOzs7SUFRTSxZQUFXO0lBQ1gsZUFBYztJQUNkLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsWUFBVztJQUNYLG9CQTNFZTtJQTRFZixRQUFPO0lBQ1AsYUFBWSxFQUNiOztBQUlMO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ibG9ja2x5LWVkaXRvci9ibG9ja2x5LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYy10YWIgPiBpbnB1dCxcbi5wYy10YWIgc2VjdGlvbiA+IGRpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiN0YWIxOmNoZWNrZWQgfiBzZWN0aW9uIC50YWIxLFxuI3RhYjI6Y2hlY2tlZCB+IHNlY3Rpb24gLnRhYjIsXG4jdGFiMzpjaGVja2VkIH4gc2VjdGlvbiAudGFiMyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jdGFiMTpjaGVja2VkIH4gbmF2IC50YWIxLFxuI3RhYjI6Y2hlY2tlZCB+IG5hdiAudGFiMixcbiN0YWIzOmNoZWNrZWQgfiBuYXYgLnRhYjMge1xuICBjb2xvcjogcmVkO1xufVxuXG4kYWN0aXZlQ29sb3I6ICNmZmZmZmY7XG4kdW5hY3RpdmVDb2xvcjogI2VlZWVlZTtcbiR1bmFjdGl2ZUhvdmVyQ29sb3I6ICNkZGRkZGQ7XG5cbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgYmFja2dyb3VuZDogI2VjZjBmMTtcbn1cblxuLnBjLXRhYiB7IFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpIHtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogJHVuYWN0aXZlQ29sb3I7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkdW5hY3RpdmVIb3ZlckNvbG9yO1xuICAgICAgICB9XG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlQ29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSBsYWJlbCB7XG4gICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7IFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZWN0aW9uIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXYge1xuICAgICAgcGFkZGluZzogMjBweDsgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgY29sb3I6ICMzNDQ5NWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiN0YWIxOmNoZWNrZWQgfiBuYXYgLnRhYjEsXG4jdGFiMjpjaGVja2VkIH4gbmF2IC50YWIyLFxuI3RhYjM6Y2hlY2tlZCB+IG5hdiAudGFiMyB7XG4gIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzExMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmVDb2xvcjtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IC0xcHg7XG4gICAgfVxuICB9XG59XG5cbiNibG9ja2x5RGl2IHtcbiAgbGluZS1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IDQ4MHB4OyBcbiAgd2lkdGg6IDcwMHB4O1xufVxuXG4jeG1sVGV4dCB7XG4gIGhlaWdodDogNDM3cHg7XG4gIHdpZHRoOiA3MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/blockly-editor/blockly-editor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/blockly-editor/blockly-editor.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlocklyEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocklyEditorComponent", function() { return BlocklyEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service.js */ "./src/app/services/data.service.js");
/* harmony import */ var _simulator_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../simulator/events.service */ "./src/app/simulator/events.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/blockly/blockly_compressed.js */ "./node_modules/blockly/blockly_compressed.js");
/* harmony import */ var _node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/blockly/javascript_compressed.js */ "./node_modules/blockly/javascript_compressed.js");
/* harmony import */ var _node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blockly_blocks_blocks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blockly-blocks/blocks.js */ "./src/app/components/blockly-editor/blockly-blocks/blocks.js");
/* harmony import */ var _blockly_blocks_blocks_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blockly_blocks_blocks_js__WEBPACK_IMPORTED_MODULE_7__);








var blocklyToXml;
var workspace;
var commandStr;
var BlocklyEditorComponent = /** @class */ (function () {
    function BlocklyEditorComponent(dataService, eventsService) {
        this.dataService = dataService;
        this.eventsService = eventsService;
    }
    BlocklyEditorComponent.prototype.ngOnInit = function () {
        // this.dataService.commandString.subscribe(commandString => this.commandString = commandString);
    };
    BlocklyEditorComponent.prototype.ngAfterViewInit = function () {
        workspace = Blockly.inject('blocklyDiv', { toolbox: this.toolbox.nativeElement });
        //get the code from blockly
        function jsUpdate() {
            var commandString = Blockly.JavaScript.workspaceToCode(workspace);
            commandStr = commandString;
        }
        function renderContent() {
            var xmlTextArea = document.getElementById('xmlText');
            var xmlDom = Blockly.Xml.workspaceToDom(workspace);
            blocklyToXml = Blockly.Xml.domToPrettyText(xmlDom);
            xmlTextArea.value = blocklyToXml;
        }
        function changeListenerCommands() {
            jsUpdate();
            renderContent();
        }
        workspace.addChangeListener(changeListenerCommands);
    };
    Object.defineProperty(BlocklyEditorComponent.prototype, "CommandString", {
        get: function () {
            return commandStr;
        },
        enumerable: true,
        configurable: true
    });
    BlocklyEditorComponent.prototype.xmlUpdate = function () {
        var xmlTextArea = document.getElementById('xmlText').value;
        var xml = Blockly.Xml.textToDom(xmlTextArea);
        Blockly.Xml.domToWorkspace(xml, workspace);
    };
    BlocklyEditorComponent.prototype.eventServiceTest = function (testArgs) {
        this.eventsService.broadcast('moveArmTest', testArgs);
        return (Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('test'));
        // return (throwError(testArgs));
    };
    // run the commands from the blocly workspace in the simulator (this should be called with start button)
    BlocklyEditorComponent.prototype.runCommandsInSimulator = function () {
        if (commandStr == null) {
            alert('Cannot run program without code!');
            return;
        }
        if (commandStr.includes('\n')) { // this will occur if blocks aren't connected properly
        }
        else {
            var commandsArray = commandStr.split(';'); // split up the commands
            commandsArray.pop(); // pull off the last element of the array (will always be empty)
            var numCommands = commandsArray.length;
            for (var i = 0; i < numCommands; i++) { // loop through all of the commands
                if (commandsArray[i].includes('wait')) { // if the command is wait
                    var waitTime = parseInt(commandsArray[i].substring(commandsArray[i].indexOf('(') + 1, commandsArray[i].indexOf(')'))); //get the wait time as an int
                    //need to call simulation service .wait()
                    /**added call to broadcast**/
                    this.callWaitFunction(waitTime);
                }
                else if (commandsArray[i].includes('moveClaw')) { // if the command is moveClaw
                    var distanceInCentimeters = parseInt(commandsArray[i].substring(commandsArray[i].indexOf('(') + 1, commandsArray[i].indexOf(')'))); //get the distance in centimeters as an int
                    //need to call simulation service .moveClaw()
                    /**added call to broadcast**/
                    this.callMoveClawFunction(distanceInCentimeters);
                }
                else if (commandsArray[i].includes('moveArm')) { //in the command is moveArm
                    var xCoord = parseInt(commandsArray[i].substring(commandsArray[i].indexOf('(') + 1, commandsArray[i].indexOf(','))); //get the x coord as an int
                    var yCoord = parseInt(commandsArray[i].substring(commandsArray[i].indexOf(',') + 1, commandsArray[i].lastIndexOf(','))); // get the y coord as an int
                    var isUpString = commandsArray[i].substring(commandsArray[i].lastIndexOf(',') + 1, commandsArray[i].indexOf(')')); //get the isUp value
                    var isUp = true; //by default isUp is true
                    if (isUpString == 'false') { //if it reads false, though
                        isUp = false; //make the boolean false
                    }
                    //need to call simulation service .moveArm()
                    /**added call to broadcast**/
                    this.callMoveArmFunction(xCoord, yCoord, isUpString);
                }
            }
        }
    };
    BlocklyEditorComponent.prototype.callMoveArmFunction = function (x, y, isUp) {
        this.eventsService.broadcast('moveArm', x, y, isUp);
    };
    BlocklyEditorComponent.prototype.callMoveClawFunction = function (dist) {
        this.eventsService.broadcast('moveClaw', dist);
    };
    BlocklyEditorComponent.prototype.callWaitFunction = function (time) {
        this.eventsService.broadcast('wait', time);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toolbox'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BlocklyEditorComponent.prototype, "toolbox", void 0);
    BlocklyEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blockly-editor',
            template: __webpack_require__(/*! ./blockly-editor.component.html */ "./src/app/components/blockly-editor/blockly-editor.component.html"),
            styles: [__webpack_require__(/*! ./blockly-editor.component.scss */ "./src/app/components/blockly-editor/blockly-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service_js__WEBPACK_IMPORTED_MODULE_2__["DataService"], _simulator_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]])
    ], BlocklyEditorComponent);
    return BlocklyEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    width: 90%;\n    margin: 0px auto;\n}\n\n#mainSectionContainer {\n    height: 500px;\n}\n\n#blockly {\n    width: 65%;\n    height: 130%;\n    float: left;\n    text-align: center;\n    background-color: rgb(207, 207, 207);\n}\n\n#simulatorSection {\n    width: 35%;\n    float: left;\n}\n\n#simulator {\n    height: 300px;\n    line-height: 300px;\n    text-align: center;\n    background-color: rgb(168, 168, 168);\n    color: rgb(255, 255, 255);\n}\n\n#robotConnection {\n    height: 100px;\n}\n\n#simulatorControls {\n    height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4jbWFpblNlY3Rpb25Db250YWluZXIge1xuICAgIGhlaWdodDogNTAwcHg7XG59XG5cbiNibG9ja2x5IHtcbiAgICB3aWR0aDogNjUlO1xuICAgIGhlaWdodDogMTMwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjA3LCAyMDcpO1xufVxuXG4jc2ltdWxhdG9yU2VjdGlvbiB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuI3NpbXVsYXRvciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBsaW5lLWhlaWdodDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4jcm9ib3RDb25uZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jc2ltdWxhdG9yQ29udHJvbHMge1xuICAgIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<div id=\"container\">\n    <div class=\"clear\"></div>\n    <div id=\"mainSectionContainer\">\n      <div id=\"blockly\">\n        <app-blockly-editor></app-blockly-editor>\n      </div>\n      <div id=\"simulatorSection\">\n        <div id=\"simulator\">\n          <app-simulator></app-simulator>\n        </div>\n        <div id=\"robotConnection\">\n          <app-robot-connection></app-robot-connection>\n        </div>\n        <div id=\"simulatorControls\">\n          <app-start-control></app-start-control>\n        </div>\n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
        // Sets local variables to data's values
    };
    MainComponent.prototype.ngAfterContentInit = function () { };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageNotFound\">\n  <span>The requested page was not found</span>\n  <p>\n    Redirecting you...\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['']);
        }, 2500); // Waits 2.5 seconds
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-settings/profile-settings.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/profile-settings/profile-settings.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1zZXR0aW5ncy9wcm9maWxlLXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile-settings/profile-settings.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile-settings/profile-settings.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile-settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/profile-settings/profile-settings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile-settings/profile-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileSettingsComponent = /** @class */ (function () {
    function ProfileSettingsComponent() {
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
    };
    ProfileSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-settings',
            template: __webpack_require__(/*! ./profile-settings.component.html */ "./src/app/components/profile-settings/profile-settings.component.html"),
            styles: [__webpack_require__(/*! ./profile-settings.component.css */ "./src/app/components/profile-settings/profile-settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/robot-connection-dialog/robot-connection-dialog.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/robot-connection-dialog/robot-connection-dialog.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".robot-radio-group {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0px;\n}\n\n.robot span {\n    margin: 0% 0% 0% 5%;\n    font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb2JvdC1jb25uZWN0aW9uLWRpYWxvZy9yb2JvdC1jb25uZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb2JvdC1jb25uZWN0aW9uLWRpYWxvZy9yb2JvdC1jb25uZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvYm90LXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcbn1cblxuLnJvYm90IHNwYW4ge1xuICAgIG1hcmdpbjogMCUgMCUgMCUgNSU7XG4gICAgZm9udC1zaXplOiAxMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/robot-connection-dialog/robot-connection-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/robot-connection-dialog/robot-connection-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Select a Robot</h1>\n<span *ngIf=\"robotList?.length == 0\">There are no robots available</span>\n<mat-radio-group *ngIf=\"robotList?.length > 0\" class=\"robot-radio-group\" aria-label=\"Select a robot\">\n    <mat-radio-button *ngFor=\"let robot of robotList\" [value]=\"robot.name\" (change)=\"selectRobot($event)\" name=\"robotName\" ngDefaultControl>\n        <div class=\"robot\">\n            <img src=\"{{ robot.profile.image_original }}\" alt=\"avatar\" width=\"50px\" />\n            <span>{{ robot.name }}</span>\n        </div>\n    </mat-radio-button>\n</mat-radio-group>"

/***/ }),

/***/ "./src/app/components/robot-connection-dialog/robot-connection-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/robot-connection-dialog/robot-connection-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RobotConnectionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotConnectionDialogComponent", function() { return RobotConnectionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_robot_connection_robot_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/robot-connection/robot-connection.service */ "./src/app/services/robot-connection/robot-connection.service.ts");



var RobotConnectionDialogComponent = /** @class */ (function () {
    function RobotConnectionDialogComponent(robotConnectionService) {
        this.robotConnectionService = robotConnectionService;
    }
    RobotConnectionDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.robotListSubs = this.robotConnectionService
            .getRobots()
            .subscribe(function (res) {
            _this.robotList = res;
        });
    };
    RobotConnectionDialogComponent.prototype.ngOnDestroy = function () {
        this.robotListSubs.unsubscribe();
    };
    RobotConnectionDialogComponent.prototype.selectRobot = function (event) {
        this.robotConnectionService.updateRobotName(event.value);
        this.robotConnectionService.connect();
    };
    RobotConnectionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-robot-connection-dialog',
            template: __webpack_require__(/*! ./robot-connection-dialog.component.html */ "./src/app/components/robot-connection-dialog/robot-connection-dialog.component.html"),
            styles: [__webpack_require__(/*! ./robot-connection-dialog.component.css */ "./src/app/components/robot-connection-dialog/robot-connection-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_robot_connection_robot_connection_service__WEBPACK_IMPORTED_MODULE_2__["RobotConnectionService"]])
    ], RobotConnectionDialogComponent);
    return RobotConnectionDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/robot-connection/robot-connection.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/robot-connection/robot-connection.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#connectionStatus {\n    text-align: center;\n}\n\n#connectionStatus > mat-icon {\n    display: inline-flex;\n    vertical-align: middle;\n}\n\nbutton {\n    display: block;\n    margin: 2% auto;\n}\n\n.green {\n    color: green;\n}\n\n.red {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb2JvdC1jb25uZWN0aW9uL3JvYm90LWNvbm5lY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9ib3QtY29ubmVjdGlvbi9yb2JvdC1jb25uZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29ubmVjdGlvblN0YXR1cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29ubmVjdGlvblN0YXR1cyA+IG1hdC1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMiUgYXV0bztcbn1cblxuLmdyZWVuIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/robot-connection/robot-connection.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/robot-connection/robot-connection.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"connectionStatus\">\n  <mat-icon class=\"green\" *ngIf=\"connectionService.IsConnected\">check_circle</mat-icon>\n  <mat-icon class=\"red\" *ngIf=\"!connectionService.IsConnected\">cancel</mat-icon>\n  <span>{{ connectionService.getConnectionString() }}</span>\n</div>\n<button mat-stroked-button (click)=\"openConnectDialog()\" *ngIf=\"!connectionService.IsConnected\">Connect</button>\n<button mat-stroked-button (click)=\"connectionService.disconnect()\" *ngIf=\"connectionService.IsConnected\">Disconnect</button>"

/***/ }),

/***/ "./src/app/components/robot-connection/robot-connection.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/robot-connection/robot-connection.component.ts ***!
  \***************************************************************************/
/*! exports provided: RobotConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotConnectionComponent", function() { return RobotConnectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_robot_connection_robot_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/robot-connection/robot-connection.service */ "./src/app/services/robot-connection/robot-connection.service.ts");
/* harmony import */ var _robot_connection_dialog_robot_connection_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../robot-connection-dialog/robot-connection-dialog.component */ "./src/app/components/robot-connection-dialog/robot-connection-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var RobotConnectionComponent = /** @class */ (function () {
    function RobotConnectionComponent(connectionService, dialog) {
        this.connectionService = connectionService;
        this.dialog = dialog;
    }
    RobotConnectionComponent.prototype.ngOnInit = function () {
    };
    RobotConnectionComponent.prototype.openConnectDialog = function () {
        var dialogRef = this.dialog.open(_robot_connection_dialog_robot_connection_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RobotConnectionDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    RobotConnectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-robot-connection',
            template: __webpack_require__(/*! ./robot-connection.component.html */ "./src/app/components/robot-connection/robot-connection.component.html"),
            styles: [__webpack_require__(/*! ./robot-connection.component.css */ "./src/app/components/robot-connection/robot-connection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_robot_connection_robot_connection_service__WEBPACK_IMPORTED_MODULE_2__["RobotConnectionService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], RobotConnectionComponent);
    return RobotConnectionComponent;
}());



/***/ }),

/***/ "./src/app/components/save-procedure/save-procedure.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/save-procedure/save-procedure.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZS1wcm9jZWR1cmUvc2F2ZS1wcm9jZWR1cmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/save-procedure/save-procedure.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/save-procedure/save-procedure.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  save-procedure works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/save-procedure/save-procedure.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/save-procedure/save-procedure.component.ts ***!
  \***********************************************************************/
/*! exports provided: SaveProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveProcedureComponent", function() { return SaveProcedureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SaveProcedureComponent = /** @class */ (function () {
    function SaveProcedureComponent() {
    }
    SaveProcedureComponent.prototype.ngOnInit = function () {
    };
    SaveProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-save-procedure',
            template: __webpack_require__(/*! ./save-procedure.component.html */ "./src/app/components/save-procedure/save-procedure.component.html"),
            styles: [__webpack_require__(/*! ./save-procedure.component.css */ "./src/app/components/save-procedure/save-procedure.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SaveProcedureComponent);
    return SaveProcedureComponent;
}());



/***/ }),

/***/ "./src/app/components/start-control/start-control.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/start-control/start-control.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    position: relative;\n}\n\nbutton {\n    display: block;\n    margin: 2% auto;\n}\n\n.greenIcon {\n    color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC1jb250cm9sL3N0YXJ0LWNvbnRyb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGFydC1jb250cm9sL3N0YXJ0LWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlIGF1dG87XG59XG5cbi5ncmVlbkljb24ge1xuICAgIGNvbG9yOiBncmVlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/start-control/start-control.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/start-control/start-control.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <button mat-stroked-button (click)=\"start()\">\n    <mat-icon class=\"greenIcon\">play_arrow</mat-icon>\n    Start\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/components/start-control/start-control.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/start-control/start-control.component.ts ***!
  \*********************************************************************/
/*! exports provided: StartControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartControlComponent", function() { return StartControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_robot_connection_robot_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/robot-connection/robot-connection.service */ "./src/app/services/robot-connection/robot-connection.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _blockly_editor_blockly_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockly-editor/blockly-editor.component */ "./src/app/components/blockly-editor/blockly-editor.component.ts");





var StartControlComponent = /** @class */ (function () {
    function StartControlComponent(robotConnectionService, dataService, blocklyComponent) {
        this.robotConnectionService = robotConnectionService;
        this.dataService = dataService;
        this.blocklyComponent = blocklyComponent;
    }
    StartControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.robotConnectionService.robotName.subscribe(function (robotName) { return _this.robotName = robotName; });
        this.dataService.commandString.subscribe(function (commandString) { return _this.commandString = commandString; });
    };
    StartControlComponent.prototype.start = function () {
        this.sendDataToRobot();
        this.blocklyComponent.runCommandsInSimulator();
    };
    StartControlComponent.prototype.sendDataToRobot = function () {
        if (this.blocklyComponent.CommandString != null) {
            var slackJSON = 'payload={"text": "<@' + this.robotName + '> ' + this.blocklyComponent.CommandString + '"}';
            var xmlHttp = new XMLHttpRequest(), webhookURL = this.robotConnectionService.WebhookURL, jsonToSend = slackJSON;
            xmlHttp.open('POST', webhookURL, false);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.send(jsonToSend);
        }
    };
    StartControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_blockly_editor_blockly_editor_component__WEBPACK_IMPORTED_MODULE_4__["BlocklyEditorComponent"]],
            selector: 'app-start-control',
            template: __webpack_require__(/*! ./start-control.component.html */ "./src/app/components/start-control/start-control.component.html"),
            styles: [__webpack_require__(/*! ./start-control.component.css */ "./src/app/components/start-control/start-control.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_robot_connection_robot_connection_service__WEBPACK_IMPORTED_MODULE_2__["RobotConnectionService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _blockly_editor_blockly_editor_component__WEBPACK_IMPORTED_MODULE_4__["BlocklyEditorComponent"]])
    ], StartControlComponent);
    return StartControlComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.js":
/*!******************************************!*\
  !*** ./src/app/services/data.service.js ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* This class is used to pass data from multiple components
** This ensures that every component receiving the service receives the most recent up-to-date data.
*/



var DataService = /** @class */ (function () {
    function DataService() {
        this.ROOT_URL = "http://localhost:5000"; // listening to API here
        this.commandStringSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.commandString = this.commandStringSource.asObservable();
    }
    Object.defineProperty(DataService.prototype, "APIUrl", {
        get: function () {
            return this.ROOT_URL;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.updateCommandString = function (commandString) {
        this.commandStringSource.next(commandString);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* This class is used to pass data from multiple components
** This ensures that every component receiving the service receives the most recent up-to-date data.
*/



var DataService = /** @class */ (function () {
    function DataService() {
        this.ROOT_URL = "http://localhost:5000"; // listening to API here
        this.commandStringSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.commandString = this.commandStringSource.asObservable();
    }
    Object.defineProperty(DataService.prototype, "APIUrl", {
        get: function () {
            return this.ROOT_URL;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.updateCommandString = function (commandString) {
        this.commandStringSource.next(commandString);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/robot-connection/robot-connection.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/robot-connection/robot-connection.service.ts ***!
  \***********************************************************************/
/*! exports provided: RobotConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotConnectionService", function() { return RobotConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/services/data.service.ts");





var RobotConnectionService = /** @class */ (function () {
    function RobotConnectionService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.WEBHOOK_URL = 'https://hooks.slack.com/services/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';
        this.robotNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.robotName = this.robotNameSource.asObservable();
        this.isConnected = this.robotName == null;
    }
    RobotConnectionService.prototype.getRobots = function () {
        return this.http
            .get(this.dataService.APIUrl + '/get_robots');
    };
    Object.defineProperty(RobotConnectionService.prototype, "IsConnected", {
        get: function () {
            return this.isConnected;
        },
        enumerable: true,
        configurable: true
    });
    RobotConnectionService.prototype.getConnectionString = function () {
        return this.isConnected ? "Online" : "Offline";
    };
    RobotConnectionService.prototype.connect = function () {
        this.isConnected = true;
    };
    RobotConnectionService.prototype.disconnect = function () {
        this.robotName = null;
        this.isConnected = false;
    };
    RobotConnectionService.prototype.updateRobotName = function (robotName) {
        this.robotNameSource.next(robotName);
    };
    Object.defineProperty(RobotConnectionService.prototype, "WebhookURL", {
        get: function () {
            return this.WEBHOOK_URL;
        },
        enumerable: true,
        configurable: true
    });
    RobotConnectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], RobotConnectionService);
    return RobotConnectionService;
}());



/***/ }),

/***/ "./src/app/simulator/events.service.ts":
/*!*********************************************!*\
  !*** ./src/app/simulator/events.service.ts ***!
  \*********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");


// import 'rxjs/add/observable/from';
// import {from} from 'rxjs/observable/from';


var EventsService = /** @class */ (function () {
    function EventsService() {
        var _this = this;
        this.listeners = {};
        this.eventsSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // this.events = Observable.from(this.eventsSubject);
        this.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.eventsSubject);
        this.events.subscribe(function (_a) {
            var name = _a.name, args = _a.args;
            if (_this.listeners[name]) {
                for (var _i = 0, _b = _this.listeners[name]; _i < _b.length; _i++) {
                    var listener = _b[_i];
                    listener.apply(void 0, args);
                }
            }
        });
    }
    EventsService.prototype.on = function (name, listener) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(listener);
    };
    EventsService.prototype.off = function (name, listener) {
        this.listeners[name] = this.listeners[name].filter(function (x) { return x !== listener; });
    };
    EventsService.prototype.broadcast = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.eventsSubject.next({
            name: name,
            args: args
        });
    };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/simulator/js/EnableThreeExamples.js":
/*!*****************************************************!*\
  !*** ./src/app/simulator/js/EnableThreeExamples.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

THREE=__webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


/***/ }),

/***/ "./src/app/simulator/js/EnableTween.js":
/*!*********************************************!*\
  !*** ./src/app/simulator/js/EnableTween.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! tween */ "./node_modules/tween/tween.js");


/***/ }),

/***/ "./src/app/simulator/model.service.ts":
/*!********************************************!*\
  !*** ./src/app/simulator/model.service.ts ***!
  \********************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/EnableThreeExamples */ "./src/app/simulator/js/EnableThreeExamples.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_3__);




var ModelService = /** @class */ (function () {
    function ModelService() {
        // constructor() { }
        this.SimModel = function () {
            console.log('in SimModel function');
            // THREE.Object3D.call(this);  //commented out for test
            // adds a whole object (group)
            this.mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
            this.mesh.name = 'simModel';
            // robot platform box
            var baseGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](19, 15, 12);
            var baseMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x90c91c });
            var base = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](baseGeometry, baseMaterial);
            base.position.y += 5;
            base.castShadow = true;
            base.receiveShadow = true;
            this.mesh.add(base);
            this.RobotArm.prototype = Object.create(/*THREE.Object3D.prototype*/ three__WEBPACK_IMPORTED_MODULE_2__["Mesh"].prototype); // changed to mesh for test
            // add the two robot arm extensions and set position
            this.lowerRobotArm = new this.RobotArm();
            this.lowerRobotArm.position.set(-13, 2, 0, -75);
            this.lowerRobotArm.rotation.set(0, 0, 0);
            this.lowerRobotArm.scale.set(.20, .20, .20);
            this.mesh.add(this.lowerRobotArm);
            console.log(this.lowerRobotArm.rotation);
            this.upperRobotArm = new this.RobotArm();
            this.upperRobotArm.rotation.z = -Math.PI / 2;
            this.upperRobotArm.position.x += 10;
            this.upperRobotArm.position.y += 210;
            this.lowerRobotArm.add(this.upperRobotArm);
            // create the pieces that will hold both claws together
            for (var i = 0; i < 2; i++) {
                var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](4, 20, .5);
                var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x1cc977 });
                var holder = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
                holder.position.set(60, 175, -.45, -75);
                if (i === 1) {
                    holder.position.set(66, 153, -.43, -75);
                }
                holder.rotation.set(0, 0, (7 * Math.PI / 4));
                this.upperRobotArm.add(holder);
            }
            // create actual claws
            this.RobotClaw.prototype = Object.create(/*THREE.Object3D.prototype*/ three__WEBPACK_IMPORTED_MODULE_2__["Mesh"].prototype); //changed to meh for test
            this.leftClaw = new this.RobotClaw();
            this.leftClaw.position.set(80, 125, -0.1, -75);
            this.leftClaw.rotation.set(0, 0, -(11 * Math.PI / 6));
            this.leftClaw.scale.set(.2, .2, .2);
            this.upperRobotArm.add(this.leftClaw);
            this.rightClaw = new this.RobotClaw();
            this.rightClaw.position.set(55, 171, -0.1, -75);
            this.rightClaw.rotation.set(0, 0, (12 * Math.PI / 6)); //changed for testing (was 12pi/6)
            this.rightClaw.scale.set(.2, .2, .2);
            // test:
            this.upperRobotArm.add(this.rightClaw);
            this.mesh.castShadow = true;
            this.mesh.receiveShadow = true;
            return this.mesh;
        };
        this.RobotClaw = function () {
            three__WEBPACK_IMPORTED_MODULE_2__["Object3D"].call(this);
            this.mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
            this.mesh.name = 'robot claw';
            var clawShape = new three__WEBPACK_IMPORTED_MODULE_2__["Shape"]();
            clawShape.moveTo(40, 40);
            clawShape.lineTo(40, 160);
            clawShape.absarc(50, 160, 10, Math.PI, 0, true);
            clawShape.lineTo(60, 40);
            clawShape.absarc(50, 40, 10, 2 * Math.PI, Math.PI, true);
            var extrudeSettings = {
                depth: 2,
                bevelEnabled: true,
                bevelSegments: 2,
                steps: 2,
                bevelSize: 1,
                bevelThickness: 1
            };
            var robotClawGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["ExtrudeGeometry"](clawShape, extrudeSettings);
            var clawMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](robotClawGeometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
                color: 0xbd1cc9,
                flatShading: true
            }));
            clawMesh.castShadow = true;
            clawMesh.receiveShadow = true;
            this.mesh.add(clawMesh);
            return this.mesh;
        };
        // RobotClaw.prototype = Object.create(THREE.Object3D.prototype);
        // RobotClaw.prototype.constructor = RobotClaw;
        // Define robot arm pieces
        this.RobotArm = function () {
            three__WEBPACK_IMPORTED_MODULE_2__["Object3D"].call(this);
            this.mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"](); //commented out to mesh for test
            this.mesh.name = 'robot arm';
            // robot arm
            var robotArmShape = new three__WEBPACK_IMPORTED_MODULE_2__["Shape"]();
            robotArmShape.moveTo(40, 40);
            robotArmShape.lineTo(40, 160);
            robotArmShape.absarc(50, 160, 10, Math.PI, 0, true);
            robotArmShape.lineTo(60, 40);
            robotArmShape.absarc(50, 40, 10, 2 * Math.PI, Math.PI, true);
            // add holes to upper arm (end and start)
            // r = 2.5
            var upperPivotPath = new three__WEBPACK_IMPORTED_MODULE_2__["Path"]();
            upperPivotPath.moveTo(47.5, 160);
            upperPivotPath.absarc(50, 160, 2.5, 0, Math.PI * 2, true);
            // creates the holes in the robot arm
            robotArmShape.holes.push(upperPivotPath);
            var lowerPivotPath = new three__WEBPACK_IMPORTED_MODULE_2__["Path"]();
            lowerPivotPath.moveTo(50, 40);
            lowerPivotPath.absarc(50, 40, 2.5, 0, Math.PI * 2, true);
            robotArmShape.holes.push(lowerPivotPath);
            var extrudeSettings = {
                depth: 5,
                bevelEnabled: true,
                bevelSegments: 2,
                steps: 2,
                bevelSize: 1,
                bevelThickness: 1
            };
            var robotArmGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["ExtrudeGeometry"](robotArmShape, extrudeSettings);
            var robotArmMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](robotArmGeometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
                color: 0x1c4bc9,
                flatShading: true
            }));
            robotArmMesh.castShadow = true;
            robotArmMesh.receiveShadow = true;
            this.mesh.add(robotArmMesh);
            return this.mesh;
        };
    }
    ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/simulator/simulator.component.css":
/*!***************************************************!*\
  !*** ./src/app/simulator/simulator.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /*body{*/\n   /*height: 500px;*/\n   /*line-height: 300px;*/\n   /*text-align: center;*/\n   /*background-color: rgb(168, 168, 168);*/\n   /*color: rgb(255, 255, 255);*/\n   /*}*/\n   /*body{*/\n   /*overflow: scroll;*/\n   /*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhdG9yL3NpbXVsYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLFNBQVM7R0FDUCxrQkFBa0I7R0FDbEIsdUJBQXVCO0dBQ3ZCLHVCQUF1QjtHQUN2Qix5Q0FBeUM7R0FDekMsOEJBQThCO0dBQ2hDLEtBQUs7R0FDTixTQUFTO0dBQ1AscUJBQXFCO0dBQ3ZCLEtBQUsiLCJmaWxlIjoic3JjL2FwcC9zaW11bGF0b3Ivc2ltdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLypib2R5eyovXG4gICAvKmhlaWdodDogNTAwcHg7Ki9cbiAgIC8qbGluZS1oZWlnaHQ6IDMwMHB4OyovXG4gICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7Ki9cbiAgIC8qY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsqL1xuIC8qfSovXG4vKmJvZHl7Ki9cbiAgLypvdmVyZmxvdzogc2Nyb2xsOyovXG4vKn0qL1xuIl19 */"

/***/ }),

/***/ "./src/app/simulator/simulator.component.html":
/*!****************************************************!*\
  !*** ./src/app/simulator/simulator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;in this file you will add {{}} which is define in component.ts&ndash;&gt;-->\n<!--<script src=\"./js/three.min.js\"></script>-->\n\n<script src=\"three/examples/js/controls/OrbitControls\"></script>\n\n<!--<script src=\"./js/simulatorModel.js\"></script>-->\n\n\n<!--<body>-->\n<!--</body>-->\n<!--<p>-->\n  <!--simulator works!-->\n<!--</p>-->\n\n<!--<p>{{moveClaw(10)}}</p>-->\n<!--<p>{{moveArm(3, 4, true)}}</p>-->\n<!--<p>{{returnToHome()}}</p>-->\n<!--<p>{{wait(1000)}}</p>-->\n<!--<p>{{start()}}</p>-->\n<!--<p>{{stop()}}</p>-->\n<!--<p>{{connectToRobot(1)}}</p>-->\n<!--<p>{{disconnectFromRobot()}}</p>-->\n"

/***/ }),

/***/ "./src/app/simulator/simulator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/simulator/simulator.component.ts ***!
  \**************************************************/
/*! exports provided: SimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorComponent", function() { return SimulatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var tween__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tween */ "./node_modules/tween/tween.js");
/* harmony import */ var tween__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tween__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/EnableThreeExamples */ "./src/app/simulator/js/EnableThreeExamples.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_EnableTween__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/EnableTween */ "./src/app/simulator/js/EnableTween.js");
/* harmony import */ var _js_EnableTween__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_EnableTween__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/js/controls/OrbitControls */ "./node_modules/three/examples/js/controls/OrbitControls.js");
/* harmony import */ var three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model.service */ "./src/app/simulator/model.service.ts");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events.service */ "./src/app/simulator/events.service.ts");




// import * as THREE from 'three/build/three.min.js';





var startMoveArm;
var startMoveClaw;
var startWait;
var animationOrder;
var SimulatorComponent = /** @class */ (function () {
    function SimulatorComponent(modelService, eventsService) {
        this.modelService = modelService;
        this.eventsService = eventsService;
        this.sumOfLowArmRotation = 0;
        this.render = this.render.bind(this);
    }
    SimulatorComponent.prototype.createScene = function () {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        // Create and position a camera
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](60, // Field of view
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1, // Near clipping pane
        1000 // Far clipping pane
        );
        // Reposition the camera
        this.camera.position.set(8, 18, 75);
        // Point the camera at a given coordinate
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](10, 18, 0));
        // refer to 'simulator' element to match the size of component
        this.container = document.getElementById('simulator');
        // // Append to the document
        // document.getElementById('simulator').appendChild(this.renderer.domElement);
    };
    SimulatorComponent.prototype.resizeWindow = function (event) {
        var WIDTH = this.container.clientWidth, HEIGHT = this.container.clientHeight;
        this.renderer.setSize(WIDTH, HEIGHT);
        this.camera.aspect = WIDTH / HEIGHT;
        this.camera.updateProjectionMatrix();
    };
    // adds Orbit Controls to scene
    SimulatorComponent.prototype.addControls = function () {
        this.controls = new three__WEBPACK_IMPORTED_MODULE_2__["OrbitControls"](this.camera, this.renderer.domElement);
        this.controls.addEventListener('change', this.render);
    };
    // inits renderer and maintains timing on animation
    SimulatorComponent.prototype.startRendering = function () {
        try {
            this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
                antialias: true
            });
        }
        catch (e) {
            alert('Need to enable webgl to see 3D graphics');
        }
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setClearColor(0x000000);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_2__["PCFSoftShadowMap"];
        document.getElementById('simulator').appendChild(this.renderer.domElement);
        var component = this;
        (function render() {
            setTimeout(function () {
                requestAnimationFrame(render);
            }, 1000 / 20);
            component.render();
        }());
    };
    SimulatorComponent.prototype.createLights = function () {
        // adds hemisphere light
        var hemisphereLight = new three__WEBPACK_IMPORTED_MODULE_2__["HemisphereLight"](0xffeeee, 0x111122, 1);
        // applies light to all objects in scene
        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0xffffff, 0.2);
        // applies point light
        var pointLight = new three__WEBPACK_IMPORTED_MODULE_2__["PointLight"](0xffffff, 1);
        pointLight.position.set(25, 50, 25);
        pointLight.castShadow = true;
        pointLight.shadow.mapSize.width = 1024;
        pointLight.shadow.mapSize.height = 1024;
        console.log(this.scene);
        this.scene.add(hemisphereLight);
        this.scene.add(ambientLight);
        this.scene.add(pointLight);
    };
    SimulatorComponent.prototype.createPlatform = function () {
        // platform for model
        var grid = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](80, 80, 70, 70), new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x393839, wireframe: true }));
        grid.position.y -= 3;
        grid.rotateX(Math.PI / 2);
        this.scene.add(grid);
        // var grid = new THREE.GridHelper( 80, 70, 0x393839, 0x393839 );
    };
    SimulatorComponent.prototype.createModel = function () {
        console.log('before setting model');
        // THIS WORKS!!!:
        // this.modelService.SimModel.prototype = Object.create(THREE.Object3D.prototype); //commented out for test
        this.modelService.SimModel.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_2__["Mesh"].prototype); // added for test
        this.model = this.modelService.SimModel();
        console.log(this.model);
        console.log('after setting model');
        this.scene.add(this.model);
        // 7 children in general
        this.base = this.model.children[0];
        this.lowerArm = this.model.children[1];
        this.upperArm = this.lowerArm.children[1];
        // this.oneHolder = this.upperArm.children[1];
        // this.secondHolder = this.upperArm.children[2];
        this.leftClaw = this.upperArm.children[3];
        this.rightClaw = this.upperArm.children[4];
    };
    SimulatorComponent.prototype.convertLinearToDegrees = function (posX, posY) {
        /**Courtesy of Kris Hopper**/
        var startX = 0;
        var startY = 10;
        var leg1 = 22.941;
        var leg2 = 37.252;
        var moveX = posX - startX;
        var moveY = posY - startY;
        var coordLimit = Math.pow(moveX, 2) + Math.pow(moveY, 2);
        var r = Math.sqrt(coordLimit);
        if (1914.001 <= coordLimit && coordLimit <= 3623.197) {
            var q_2 = Math.acos((Math.pow(moveX, 2) + Math.pow(moveY, 2) - Math.pow(leg1, 2) - Math.pow(leg2, 2)) / (2 * leg1 * leg2));
            var q_1 = Math.atan(moveY / moveX) - Math.atan((leg2 * Math.sin(q_2) / (leg1 + leg2 * Math.cos(q_2))));
            // convert radians to degrees
            q_1 = q_1 * (180 / Math.PI);
            q_2 = q_2 * (180 / Math.PI);
            var lowerArmAngle = -(90 - q_1);
            var upperArmAngle = -(180 - q_2);
            return [lowerArmAngle, upperArmAngle];
        }
    };
    SimulatorComponent.prototype.moveArmFunction = function (posX, posY, isElbowUp) {
        if (isElbowUp === void 0) { isElbowUp = true; }
        console.log('X: ' + posX + ' Y: ' + posY + ' ElbowUp: ' + isElbowUp);
        // const calculatedAngles = this.convertLinearToDegrees(posX, posY);
        // const lowerArmAngle = calculatedAngles[0];
        // const upperArmAngle = calculatedAngles[1];
        console.log('current up arm rotation:', this.upperArm.rotation);
        console.log('sum of lower arm rotation:', this.sumOfLowArmRotation);
        var LboundingBox = new three__WEBPACK_IMPORTED_MODULE_2__["Box3"]().setFromObject(this.lowerArm);
        var RboundingBox = new three__WEBPACK_IMPORTED_MODULE_2__["Box3"]().setFromObject(this.upperArm);
        var axis = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 1);
        var lowerArmPivot = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0);
        // need to change limit to -90 to 90 degrees (ofc need to add to default rot pos)
        // if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)) {
        if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)) {
            this.lowerArm.parent.localToWorld(this.lowerArm.position);
            this.lowerArm.position.sub(lowerArmPivot);
            this.lowerArm.position.applyAxisAngle(axis, -Math.PI / 144);
            this.lowerArm.position.add(lowerArmPivot);
            this.lowerArm.parent.worldToLocal(this.lowerArm.position);
            // this.lowerArm.rotateOnAxis(axis, -Math.PI/12);
            this.lowerArm.rotation.z += -Math.PI / 144; // PI/84 for iter
            console.log('rotation:', this.lowerArm.rotation);
            console.log('new lowerArm position:', this.lowerArm.position);
            console.log('curr position of upArm:', this.upperArm.position);
            console.log('curr rotation of upArm:', this.upperArm.rotation);
            this.sumOfLowArmRotation += -Math.PI / 144;
            console.log('sum of lower arm rotation: ', this.sumOfLowArmRotation);
        }
        // else if (this.upperArm.rotation.z > -5 * Math.PI / 4 - this.sumOfLowArmRotation && this.upperArm.rotation.z < 5 * Math.PI / 4 + this.sumOfLowArmRotation) {
        else if (this.upperArm.rotation.z > -9 * Math.PI / 12 - this.sumOfLowArmRotation && this.upperArm.rotation.z < -2 * Math.PI / 12 + this.sumOfLowArmRotation) {
            console.log('current pos of upperArm', this.upperArm.position);
            var upperArmPivot = RboundingBox.getCenter();
            console.log('orignal upperArmPivot:', upperArmPivot);
            console.log('Half of y size:', RboundingBox.getSize().x / 2);
            upperArmPivot.x -= (RboundingBox.getSize().x / 2) - 2;
            upperArmPivot.y -= (RboundingBox.getSize().y / 2) - 18;
            console.log('upperArmPivot:', upperArmPivot);
            console.log('curr up arm rotation:', this.upperArm.rotation);
            console.log('TEST:', this.upperArm.position.x - upperArmPivot.x);
            this.upperArm.parent.localToWorld(this.upperArm.position);
            this.upperArm.position.sub(upperArmPivot);
            console.log('test position:', this.upperArm.position);
            this.upperArm.position.applyAxisAngle(axis, -Math.PI / 144);
            this.upperArm.position.add(upperArmPivot);
            this.upperArm.parent.worldToLocal(this.upperArm.position);
            // this.upperArm.rotateOnAxis(axis, 4*Math.PI / 12);
            this.upperArm.rotation.z += -Math.PI / 144;
            console.log('after pos of upperArm', this.upperArm.position);
            console.log('after rotation of upperArm', this.upperArm.rotation);
            console.log('sum of lower arm rotation: ', this.sumOfLowArmRotation);
        }
        else {
            // startMoveArm[0] = false;
            animationOrder.shift();
        }
        /**comment out for now**/
        // alert('Moving robot arm (' + posX + ', ' + posY + '), with elbow up being ' + isElbowUp);
    };
    SimulatorComponent.prototype.moveClawFunction = function (distanceApart) {
        console.log('moveClaw func called');
        animationOrder.shift();
        // const axis = new THREE.Vector3(0, 0, 1);
        // const leftClawBox = new THREE.Box3().setFromObject(this.leftClaw);
        // const rightClawBox = new THREE.Box3().setFromObject(this.rightClaw);
        // const leftClawPivot = leftClawBox.getCenter();
        // const rightClawPivot = rightClawBox.getCenter();
        // // console.log('default pos of leftClaw:', this.leftClaw.position);
        // // console.log('default rot of leftClaw:', this.leftClaw.rotation);
        // console.log('leftClaw position:', this.leftClaw.position);
        // console.log('leftClaw dimension:', leftClawBox.getSize());
        // console.log('leftClaw center:', leftClawPivot);
        // // console.log('rightClaw dimension:', rightClawBox.getSize());
        // // console.log('rightClaw center:', rightClawPivot);
        //
        //
        // // if (this.leftClaw.rotation.z > -11 * Math.PI / 6 + -1.5 * Math.PI / 12 && this.leftClaw.rotation.z < -11 * Math.PI / 6 + 8.5 * Math.PI / 12) {
        // //   console.log('leftClaw center:', leftClawPivot);
        //   leftClawPivot.x -= (leftClawBox.getSize().x/* / 2*/) + 20;  // changes vertical direction
        //   leftClawPivot.y -= (leftClawBox.getSize().y /*/ 2*/) + 37; // changes horizontal direction
        //
        //   console.log('new l pivot:', leftClawPivot);
        //   // console.log('rotation of l:', this.leftClaw.rotation);
        //
        //   /**test**/
        //   // this.leftClaw.rotation.z += Math.PI/24;
        //   /**test**/
        //
        //   console.log('leftClaw min:', leftClawBox.min);
        //   console.log('leftClaw max:', leftClawBox.max);
        //
        //   this.leftClaw.parent.localToWorld(this.leftClaw.position);
        //   /**test**/
        //   this.leftClaw.parent.localToWorld(leftClawBox.getCenter());
        //   // this.leftClaw.position.sub(leftClawPivot);
        //   console.log('new leftClaw position:', this.leftClaw.position);
        //   console.log('world pivot:', leftClawBox.getCenter());
        //   // this.leftClaw.position.applyAxisAngle(axis, Math.PI / 144);
        //   // this.leftClaw.position.add(leftClawPivot);
        //   // this.leftClaw.parent.worldToLocal(this.leftClaw.position);
        //   // // this.leftClaw.rotation.z += Math.PI / 48;
        //   // this.leftClaw.rotateOnAxis(axis, Math.PI / 144);
        //
        //   // console.log('leftClaw after position', this.leftClaw.position);
        //   // console.log('leftClaw after rotation', this.leftClaw.rotation);
        //   // console.log('leftClaw center after rotation', leftClawBox.getCenter());
        //
        // // }
        //
        // // else if (this.rightClaw.rotation.z > 12 * Math.PI / 6 + -4 * Math.PI / 12 && this.rightClaw.rotation.z < 12 * Math.PI / 6 + 3.5 * Math.PI / 12) {
        // //
        // //   rightClawPivot.x -= (rightClawBox.getSize().x / 2) - .75; // kinda works without offset
        // //   rightClawPivot.y -= (rightClawBox.getSize().y / 2) + 0; // kinda works without offset
        // //
        // //   console.log('new r pivot:', rightClawPivot);
        // //   console.log('default rot of r:', this.rightClaw.rotation);
        // //
        // //   /**Maybe this works??**/
        // //   this.rightClaw.parent.localToWorld(this.rightClaw.position);
        // //   this.rightClaw.position.sub(rightClawPivot);
        // //   console.log('test r claw position:', this.rightClaw.position);
        // //   this.rightClaw.position.applyAxisAngle(axis, Math.PI / 144);
        // //   this.rightClaw.position.add(rightClawPivot);
        // //   this.rightClaw.parent.worldToLocal(this.rightClaw.position);
        // //   this.rightClaw.rotation.z += Math.PI / 144;
        // // }
        //
        //
        // // alert('Moving claw' + distanceApart + ' centimeters apart');
    };
    SimulatorComponent.prototype.wait = function (timeToWait) {
        // add timer here
        console.log('in wait function');
        setTimeout(function () {
            console.log('Waited ' + timeToWait + ' milliseconds!');
            // alert('Waited ' + timeToWait + ' milliseconds!');
            return;
        }, timeToWait);
        animationOrder.shift();
    };
    SimulatorComponent.prototype.animateVector3 = function (vectorToAnimate, target, options) {
        options = options || {};
        var to = target || three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](), easing = options.easign ||
            tween__WEBPACK_IMPORTED_MODULE_3__["Easing"].Quadratic.In, duration = options.duration || 2000;
        var tweenVector3 = new tween__WEBPACK_IMPORTED_MODULE_3__["Tween"](vectorToAnimate)
            .to({ x: to.x, y: to.y, z: to.z, }, duration)
            .easing(easing)
            .onUpdate(function (d) {
            if (options.update) {
                options.update(d);
            }
        })
            .onComplete(function () {
            if (options.callback) {
                options.callback();
            }
        });
        tweenVector3.start();
        return tweenVector3;
    };
    SimulatorComponent.prototype.render = function () {
        // looks at the animation order and calls each animation method accordingly
        if (animationOrder != null && animationOrder.length !== 0) {
            // get first method called
            var animMethod = animationOrder[0];
            // checks to see which animation method is being called
            if (animMethod[0] == 'moveArm') {
                this.moveArmFunction(startMoveArm[1], startMoveArm[2], startMoveArm[3]);
                this.renderer.render(this.scene, this.camera);
            }
            else if (animMethod[0] == 'moveClaw') {
                this.moveClawFunction((startMoveClaw[1]));
                this.renderer.render(this.scene, this.camera);
            }
            else if (animMethod[0] == 'wait') {
                this.wait(startWait[1]);
                this.renderer.render(this.scene, this.camera);
            }
        }
        this.renderer.render(this.scene, this.camera);
    };
    SimulatorComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createLights();
        this.createPlatform();
        this.createModel();
        this.startRendering();
        // initializes the animation order
        animationOrder = [];
        // event listeners that listen to any passed data from Blockly component
        this.eventsService.on('moveArmTest', function (testParams) {
            console.log('moveArm called via event');
            console.log('testParams: ' + testParams);
        });
        this.eventsService.on('moveArm', function (x, y, isElbowUp) {
            console.log('moveArmFunction called via event');
            console.log('Received arguments: ' + x + ', ' + y + ', ' + isElbowUp);
            startMoveArm = [];
            startMoveArm[0] = 'moveArm';
            startMoveArm[1] = x;
            startMoveArm[2] = y;
            startMoveArm[3] = isElbowUp;
            animationOrder.push(startMoveArm);
        });
        this.eventsService.on('moveClaw', function (distanceApart) {
            console.log('moveClawFunction called via event');
            console.log('Received arguments: ' + distanceApart);
            startMoveClaw = [];
            startMoveClaw[0] = 'moveClaw';
            startMoveClaw[1] = distanceApart;
            animationOrder.push(startMoveClaw);
        });
        this.eventsService.on('wait', function (waitTime) {
            console.log('waitFunction called via event');
            console.log('Received arguments: ' + waitTime);
            startWait = [];
            startWait[0] = 'wait';
            startWait[1] = waitTime;
            animationOrder.push(startWait);
        });
        this.addControls();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SimulatorComponent.prototype, "resizeWindow", null);
    SimulatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simulator',
            template: __webpack_require__(/*! ./simulator.component.html */ "./src/app/simulator/simulator.component.html"),
            styles: [__webpack_require__(/*! ./simulator.component.css */ "./src/app/simulator/simulator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], _events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]])
    ], SimulatorComponent);
    return SimulatorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Chris/KLAW-Web/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map