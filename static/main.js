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

module.exports = "/*testing css of simulation*/\r\nheader {\r\n  background: #a44fb522;\r\n}\r\n#logo{\r\n  width: 170px;\r\n  padding-left: 10px;\r\n  padding-top: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp0ZXN0aW5nIGNzcyBvZiBzaW11bGF0aW9uKi9cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYTQ0ZmI1MjI7XHJcbn1cclxuXHJcbiNsb2dve1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\r\n    <img id=\"logo\" src=\"KLAW_Header.png\" alt=\"KLAW\">\r\n</div>\r\n<div class=\"clear\"></div>\r\n<router-outlet></router-outlet>"

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
    this.setColour(240);
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
    this.setColour(290);
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
    this.setColour(100);
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

module.exports = "<div class=\"pc-tab\">\r\n<input checked=\"checked\" id=\"tab1\" type=\"radio\" name=\"pct\" />\r\n<input id=\"tab2\" type=\"radio\" name=\"pct\" />\r\n  <nav>\r\n    <ul>\r\n      <li class=\"tab1\">\r\n        <label for=\"tab1\" #blockCode>Block Code</label>\r\n      </li>\r\n      <li class=\"tab2\">\r\n        <label for=\"tab2\">XML</label>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <section>\r\n    <div class=\"tab1\">\r\n      <h2>Block Code</h2>\r\n      <div id=\"blocklyDiv\"></div>\r\n        <xml id=\"toolbox\" #toolbox style=\"display: none\">\r\n                <category name=\"Robot\" expanded=\"true\">\r\n                        <block type=\"move_arm\"></block>\r\n                        <block type=\"move_claw\"></block>\r\n                        <block type=\"wait\"></block>\r\n                </category>\r\n        </xml>\r\n\r\n    </div>\r\n    <div class=\"tab2\">\r\n      <h2>XML</h2>\r\n      <textarea id=\"xmlText\"></textarea>\r\n      <button mat-stroked-button (click)='blockCode.click(); xmlUpdate();'> \r\n        <mat-icon>code</mat-icon>\r\n        Update Code Blocks\r\n      </button>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/blockly-editor/blockly-editor.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/blockly-editor/blockly-editor.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pc-tab > input,\n.pc-tab section > div {\n  display: none; }\n\n#tab1:checked ~ section .tab1,\n#tab2:checked ~ section .tab2,\n#tab3:checked ~ section .tab3 {\n  display: block; }\n\n#tab1:checked ~ nav .tab1,\n#tab2:checked ~ nav .tab2,\n#tab3:checked ~ nav .tab3 {\n  color: red; }\n\n*, *:after, *:before {\n  box-sizing: border-box; }\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  background: #ecf0f1; }\n\n.pc-tab {\n  width: 100%;\n  max-width: 750px;\n  margin: 0 auto; }\n\n.pc-tab ul {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n\n.pc-tab ul li label {\n      float: left;\n      padding: 15px 25px;\n      border: 1px solid #ddd;\n      border-bottom: 0;\n      background: #ffffff;\n      color: #1B404F; }\n\n.pc-tab ul li label:hover {\n        background: #137A86; }\n\n.pc-tab ul li label:active {\n        background: #031A23;\n        color: #ffffff; }\n\n.pc-tab ul li:not(:last-child) label {\n      border-right-width: 0; }\n\n.pc-tab section {\n    clear: both; }\n\n.pc-tab section div {\n      padding: 20px;\n      width: 100%;\n      line-height: 1.5em;\n      letter-spacing: 0.3px;\n      border-top: 1px solid #34495e;\n      color: #1B404F; }\n\n.pc-tab section div h2 {\n        margin: 0;\n        letter-spacing: 1px;\n        color: black; }\n\n#tab1:checked ~ nav .tab1 label,\n#tab2:checked ~ nav .tab2 label,\n#tab3:checked ~ nav .tab3 label {\n  background: white;\n  color: #111;\n  position: relative; }\n\n#tab1:checked ~ nav .tab1 label:after,\n  #tab2:checked ~ nav .tab2 label:after,\n  #tab3:checked ~ nav .tab3 label:after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    background: #031A23;\n    left: 0;\n    bottom: -1px; }\n\n#blocklyDiv {\n  line-height: 500px;\n  height: 480px;\n  width: 100%;\n  border-top: 1px solid #ffffff; }\n\n#xmlText {\n  height: 417.5px;\n  width: 100%; }\n\n.tab2 h2 {\n  padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9ja2x5LWVkaXRvci9DOlxcUHVsbGVkX0tMQVdcXEtMQVctV2ViXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmxvY2tseS1lZGl0b3JcXGJsb2NrbHktZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGNBQWEsRUFDZDs7QUFFRDs7O0VBR0UsZUFBYyxFQUNmOztBQUVEOzs7RUFHRSxXQUFVLEVBQ1g7O0FBUUQ7RUFHRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixlQUFjLEVBMENmOztBQTdDRDtJQUtJLGlCQUFnQjtJQUNoQixVQUFTO0lBQ1QsV0FBVSxFQXFCWDs7QUE1Qkg7TUFVUSxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLHVCQUFzQjtNQUN0QixpQkFBZ0I7TUFDaEIsb0JBOUJlO01BK0JmLGVBNUJtQixFQW9DcEI7O0FBdkJQO1FBaUJVLG9CQWhDa0IsRUFpQ25COztBQWxCVDtRQW9CVSxvQkFyQ1c7UUFzQ1gsZUFuQ2UsRUFvQ2hCOztBQXRCVDtNQXlCUyxzQkFBcUIsRUFDdkI7O0FBMUJQO0lBOEJJLFlBQVcsRUFjWjs7QUE1Q0g7TUFnQ00sY0FBYTtNQUNiLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsc0JBQXFCO01BQ3JCLDhCQUE2QjtNQUM3QixlQUFjLEVBTWY7O0FBM0NMO1FBdUNRLFVBQVM7UUFDVCxvQkFBbUI7UUFDbkIsYUFBWSxFQUNiOztBQUtQOzs7RUFJSSxrQkFBaUI7RUFDakIsWUFBVztFQUNYLG1CQUFrQixFQVduQjs7QUFqQkg7OztJQVFNLFlBQVc7SUFDWCxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxZQUFXO0lBQ1gsb0JBN0VlO0lBOEVmLFFBQU87SUFDUCxhQUFZLEVBQ2I7O0FBSUw7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFlBQVc7RUFDWCw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRDtFQUNDLHFCQUFvQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvY2tseS1lZGl0b3IvYmxvY2tseS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGMtdGFiID4gaW5wdXQsXHJcbi5wYy10YWIgc2VjdGlvbiA+IGRpdiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3RhYjE6Y2hlY2tlZCB+IHNlY3Rpb24gLnRhYjEsXHJcbiN0YWIyOmNoZWNrZWQgfiBzZWN0aW9uIC50YWIyLFxyXG4jdGFiMzpjaGVja2VkIH4gc2VjdGlvbiAudGFiMyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiN0YWIxOmNoZWNrZWQgfiBuYXYgLnRhYjEsXHJcbiN0YWIyOmNoZWNrZWQgfiBuYXYgLnRhYjIsXHJcbiN0YWIzOmNoZWNrZWQgfiBuYXYgLnRhYjMge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiRhY3RpdmVDb2xvcjogIzAzMUEyMztcclxuJHVuYWN0aXZlQ29sb3I6ICNmZmZmZmY7XHJcbiR1bmFjdGl2ZUhvdmVyQ29sb3I6ICMxMzdBODY7XHJcbiRhY3RpdmVUZXh0Q29sb3I6ICNmZmZmZmY7XHJcbiR1bmFjdGl2ZVRleHRDb2xvcjogIzFCNDA0RjtcclxuXHJcbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGJhY2tncm91bmQ6ICNlY2YwZjE7XHJcbn1cclxuXHJcbi5wYy10YWIgeyBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGkge1xyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdW5hY3RpdmVDb2xvcjtcclxuICAgICAgICBjb2xvcjogJHVuYWN0aXZlVGV4dENvbG9yO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHVuYWN0aXZlSG92ZXJDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGFjdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRhY3RpdmVUZXh0Q29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSBsYWJlbCB7XHJcbiAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDsgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzQ0OTVlO1xyXG4gICAgICBjb2xvcjogIzFCNDA0RjtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI3RhYjE6Y2hlY2tlZCB+IG5hdiAudGFiMSxcclxuI3RhYjI6Y2hlY2tlZCB+IG5hdiAudGFiMixcclxuI3RhYjM6Y2hlY2tlZCB+IG5hdiAudGFiMyB7XHJcbiAgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlQ29sb3I7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogLTFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNibG9ja2x5RGl2IHtcclxuICBsaW5lLWhlaWdodDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA0ODBweDsgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuXHJcbiN4bWxUZXh0IHtcclxuICBoZWlnaHQ6IDQxNy41cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWIyIGgyIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"

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
/* harmony import */ var _simulator_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../simulator/events.service */ "./src/app/simulator/events.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/blockly/blockly_compressed.js */ "./node_modules/blockly/blockly_compressed.js");
/* harmony import */ var _node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/blockly/javascript_compressed.js */ "./node_modules/blockly/javascript_compressed.js");
/* harmony import */ var _node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blockly_blocks_blocks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blockly-blocks/blocks.js */ "./src/app/components/blockly-editor/blockly-blocks/blocks.js");
/* harmony import */ var _blockly_blocks_blocks_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blockly_blocks_blocks_js__WEBPACK_IMPORTED_MODULE_6__);







var blocklyToXml;
var workspace;
var commandStr;
var BlocklyEditorComponent = /** @class */ (function () {
    function BlocklyEditorComponent(eventsService) {
        this.eventsService = eventsService;
    }
    BlocklyEditorComponent.prototype.ngOnInit = function () {
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
        return (Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('test'));
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_simulator_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
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

module.exports = "#container {\r\n    width: 100%;\r\n    margin: 0px auto;\r\n}\r\n\r\n#mainSectionContainer {\r\n    height: 100%;\r\n}\r\n\r\n#blockly {\r\n    width: 65%;\r\n    height: 100%;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n\r\n#simulatorSection {\r\n    width: 30%;\t\r\n    float: right;\r\n}\r\n\r\n#simulator {\r\n    height: 300px;\r\n    line-height: 300px;\r\n    text-align: center;\r\n    background-color: rgb(168, 168, 168);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n#belowSimulator {\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\n#robotConnection {\r\n    height: 100px;\r\n    padding-top:50px;\r\n}\r\n\r\n#simulatorControls {\r\n    height: 100px;\r\n}\r\n\r\n@media only screen and (max-width:800px) {\r\n\t#simulatorSection, #mainSectionContainer, #blockly {\r\n\t\twidth: 100%;\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n\r\n#container {\r\n    width: 100%;\r\n    margin: 0px auto;\r\n}\r\n\r\n#mainSectionContainer {\r\n    height: 100%;\r\n}\r\n\r\n#blockly {\r\n    width: 65%;\r\n    height: 100%;\r\n    float: left;\r\n    text-align: center;\r\n    background-color: #ffffff;\r\n    border-radius: 0px 12px 12px 0px;\r\n}\r\n\r\n#simulatorSection {\r\n    width: 30%;\t\r\n    float: right;\r\n    border-radius: 0px 12px 12px 0px;\r\n}\r\n\r\n#simulator {\r\n    height: 300px;\r\n    line-height: 300px;\r\n    text-align: center; \r\n}\r\n\r\n#belowSimulator {\r\n    background-color: #ffffff;\r\n    border-radius: 0px 0px 0px 12px;\r\n}\r\n\r\n#robotConnection {\r\n    height: 100px;\r\n    padding-top:50px;\r\n}\r\n\r\n#simulatorControls {\r\n    height: 100px;\r\n}\r\n\r\n@media only screen and (max-width:800px) {\r\n    #blockly, #simulatorSection, #simulator, #belowSimulator{\r\n        border-radius: 0px 0px 0px 0px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width:800px) {\r\n\t#simulatorSection, #mainSectionContainer, #blockly {\r\n\t\twidth: 100%;\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsMEJBQTBCO0NBQzdCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7Q0FDQztFQUNDLFlBQVk7RUFDWixlQUFlO0VBQ2Y7Q0FDRDs7QUFBQTtJQUNHLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0k7UUFDSSwrQkFBK0I7S0FDbEM7Q0FDSjs7QUFFRDtDQUNDO0VBQ0MsWUFBWTtFQUNaLGVBQWU7RUFDZjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4jbWFpblNlY3Rpb25Db250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jYmxvY2tseSB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzaW11bGF0b3JTZWN0aW9uIHtcclxuICAgIHdpZHRoOiAzMCU7XHRcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI3NpbXVsYXRvciB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuI2JlbG93U2ltdWxhdG9yIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jcm9ib3RDb25uZWN0aW9uIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcblxyXG4jc2ltdWxhdG9yQ29udHJvbHMge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XHJcblx0I3NpbXVsYXRvclNlY3Rpb24sICNtYWluU2VjdGlvbkNvbnRhaW5lciwgI2Jsb2NrbHkge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbn0jY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuI21haW5TZWN0aW9uQ29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2Jsb2NrbHkge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMnB4IDEycHggMHB4O1xyXG59XHJcblxyXG4jc2ltdWxhdG9yU2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMzAlO1x0XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTJweCAxMnB4IDBweDtcclxufVxyXG5cclxuI3NpbXVsYXRvciB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuI2JlbG93U2ltdWxhdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAxMnB4O1xyXG59XHJcblxyXG4jcm9ib3RDb25uZWN0aW9uIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcblxyXG4jc2ltdWxhdG9yQ29udHJvbHMge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XHJcbiAgICAjYmxvY2tseSwgI3NpbXVsYXRvclNlY3Rpb24sICNzaW11bGF0b3IsICNiZWxvd1NpbXVsYXRvcntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xyXG5cdCNzaW11bGF0b3JTZWN0aW9uLCAjbWFpblNlY3Rpb25Db250YWluZXIsICNibG9ja2x5IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\r\n<div id=\"container\">\r\n    <div class=\"clear\"></div>\r\n    <div id=\"mainSectionContainer\">\r\n      <div id=\"blockly\">\r\n        <app-blockly-editor></app-blockly-editor>\r\n      </div>\r\n      <div id=\"simulatorSection\">\r\n        <div id=\"simulator\">\r\n          <app-simulator></app-simulator>\r\n        </div>\r\n        <div id=\"belowSimulator\">\r\n        \t<div id=\"robotConnection\">\r\n          \t\t<app-robot-connection></app-robot-connection>\r\n        \t</div>\r\n        \t<div id=\"simulatorControls\">\r\n          \t\t<app-start-control></app-start-control>\r\n        \t</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n"

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
    };
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

module.exports = "<div id=\"pageNotFound\">\r\n  <span>The requested page was not found</span>\r\n  <p>\r\n    Redirecting you...\r\n  </p>\r\n</div>"

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

module.exports = "<p>\r\n  profile-settings works!\r\n</p>\r\n"

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

module.exports = ".robot-radio-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.robot span {\r\n    margin: 0% 0% 0% 5%;\r\n    font-size: 110%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb2JvdC1jb25uZWN0aW9uLWRpYWxvZy9yb2JvdC1jb25uZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb2JvdC1jb25uZWN0aW9uLWRpYWxvZy9yb2JvdC1jb25uZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvYm90LXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5cclxuLnJvYm90IHNwYW4ge1xyXG4gICAgbWFyZ2luOiAwJSAwJSAwJSA1JTtcclxuICAgIGZvbnQtc2l6ZTogMTEwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/robot-connection-dialog/robot-connection-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/robot-connection-dialog/robot-connection-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Select a Robot</h1>\r\n<span *ngIf=\"robotList?.length == 0\">There are no robots available</span>\r\n<mat-radio-group *ngIf=\"robotList?.length > 0\" class=\"robot-radio-group\" aria-label=\"Select a robot\">\r\n    <mat-radio-button *ngFor=\"let robot of robotList\" [value]=\"robot.name\" (change)=\"selectRobot($event)\" name=\"robotName\" ngDefaultControl>\r\n        <div class=\"robot\">\r\n            <img src=\"{{ robot.profile.image_original }}\" alt=\"avatar\" width=\"50px\" />\r\n            <span>{{ robot.name }}</span>\r\n        </div>\r\n    </mat-radio-button>\r\n</mat-radio-group>"

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

module.exports = "#connectionStatus {\r\n    text-align: center;\r\n}\r\n\r\n#connectionStatus > mat-icon {\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 2% auto;\r\n}\r\n\r\n.green {\r\n    color: green;\r\n}\r\n\r\n.red {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb2JvdC1jb25uZWN0aW9uL3JvYm90LWNvbm5lY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9ib3QtY29ubmVjdGlvbi9yb2JvdC1jb25uZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29ubmVjdGlvblN0YXR1cyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb25uZWN0aW9uU3RhdHVzID4gbWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlIGF1dG87XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/robot-connection/robot-connection.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/robot-connection/robot-connection.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"connectionStatus\">\r\n  <mat-icon class=\"green\" *ngIf=\"connectionService.IsConnected\">check_circle</mat-icon>\r\n  <mat-icon class=\"red\" *ngIf=\"!connectionService.IsConnected\">cancel</mat-icon>\r\n  <span>{{ connectionService.getConnectionString() }}</span>\r\n</div>\r\n<button mat-stroked-button (click)=\"openConnectDialog()\" *ngIf=\"!connectionService.IsConnected\">Connect</button>\r\n<button mat-stroked-button (click)=\"connectionService.disconnect()\" *ngIf=\"connectionService.IsConnected\">Disconnect</button>"

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

module.exports = "<p>\r\n  save-procedure works!\r\n</p>\r\n"

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

module.exports = "#container {\r\n    position: relative;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 2% auto;\r\n}\r\n\r\n.greenIcon {\r\n    color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC1jb250cm9sL3N0YXJ0LWNvbnRyb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGFydC1jb250cm9sL3N0YXJ0LWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlIGF1dG87XHJcbn1cclxuXHJcbi5ncmVlbkljb24ge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/start-control/start-control.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/start-control/start-control.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <button mat-stroked-button (click)=\"start()\">\r\n    <mat-icon class=\"greenIcon\">play_arrow</mat-icon>\r\n    Start\r\n  </button>\r\n</div>"

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
        if (this.blocklyComponent.CommandString != null && this.robotName) {
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
        this.API_URL = "https://klaw-web.herokuapp.com"; // listening to API here
        this.commandStringSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.commandString = this.commandStringSource.asObservable();
    }
    Object.defineProperty(DataService.prototype, "APIUrl", {
        get: function () {
            return this.API_URL;
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
        this.updateRobotName("");
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
            this.upperRobotArm = new this.RobotArm();
            this.upperRobotArm.rotation.z = -Math.PI / 2;
            this.upperRobotArm.position.x += 10;
            this.upperRobotArm.position.y += 210;
            this.lowerRobotArm.add(this.upperRobotArm);
            /**updated claw**/
            // width, height, depth
            var holderGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](25, 30, 35);
            var holderMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x1cc977 });
            var holder = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](holderGeometry, holderMaterial);
            // holder.scale.set(.8, .8, .8);
            holder.position.set(51, 160, 3, -75);
            // rotate slightly downward
            holder.rotation.set(0, 0, -Math.PI / 6);
            this.upperRobotArm.add(holder);
            this.RobotClaw.prototype = Object.create(/*THREE.Object3D.prototype*/ three__WEBPACK_IMPORTED_MODULE_2__["Mesh"].prototype); // changed to mesh for test
            this.leftClaw = new this.RobotClaw();
            this.leftClaw.position.set(43, 173, 27, -75);
            this.leftClaw.rotation.set(0, 0, -Math.PI / 6);
            this.leftClaw.scale.set(.2, .2, .2);
            this.leftClaw.updateMatrix();
            this.upperRobotArm.add(this.leftClaw);
            this.rightClaw = new this.RobotClaw();
            this.rightClaw.position.set(43, 173, 0, -75);
            this.rightClaw.rotation.set(0, 0, -Math.PI / 6);
            this.rightClaw.scale.set(.2, .2, .2);
            this.rightClaw.updateMatrix();
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
            /**added rotation**/
            clawMesh.rotation.y += Math.PI / 2;
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
            this.mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
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

module.exports = " /*body{*/\r\n   /*height: 500px;*/\r\n   /*line-height: 300px;*/\r\n   /*text-align: center;*/\r\n   /*background-color: rgb(168, 168, 168);*/\r\n   /*color: rgb(255, 255, 255);*/\r\n   /*}*/\r\n   /*body{*/\r\n   /*overflow: scroll;*/\r\n   /*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhdG9yL3NpbXVsYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLFNBQVM7R0FDUCxrQkFBa0I7R0FDbEIsdUJBQXVCO0dBQ3ZCLHVCQUF1QjtHQUN2Qix5Q0FBeUM7R0FDekMsOEJBQThCO0dBQ2hDLEtBQUs7R0FDTixTQUFTO0dBQ1AscUJBQXFCO0dBQ3ZCLEtBQUsiLCJmaWxlIjoic3JjL2FwcC9zaW11bGF0b3Ivc2ltdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLypib2R5eyovXHJcbiAgIC8qaGVpZ2h0OiA1MDBweDsqL1xyXG4gICAvKmxpbmUtaGVpZ2h0OiAzMDBweDsqL1xyXG4gICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xyXG4gICAvKmJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTsqL1xyXG4gICAvKmNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7Ki9cclxuIC8qfSovXHJcbi8qYm9keXsqL1xyXG4gIC8qb3ZlcmZsb3c6IHNjcm9sbDsqL1xyXG4vKn0qL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/simulator/simulator.component.html":
/*!****************************************************!*\
  !*** ./src/app/simulator/simulator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;in this file you will add {{}} which is define in component.ts&ndash;&gt;-->\r\n<!--<script src=\"./js/three.min.js\"></script>-->\r\n\r\n<script src=\"three/examples/js/controls/OrbitControls\"></script>\r\n\r\n<!--<script src=\"./js/simulatorModel.js\"></script>-->\r\n\r\n\r\n<!--<body>-->\r\n<!--</body>-->\r\n<!--<p>-->\r\n  <!--simulator works!-->\r\n<!--</p>-->\r\n\r\n<!--<p>{{moveClaw(10)}}</p>-->\r\n<!--<p>{{moveArm(3, 4, true)}}</p>-->\r\n<!--<p>{{returnToHome()}}</p>-->\r\n<!--<p>{{wait(1000)}}</p>-->\r\n<!--<p>{{start()}}</p>-->\r\n<!--<p>{{stop()}}</p>-->\r\n<!--<p>{{connectToRobot(1)}}</p>-->\r\n<!--<p>{{disconnectFromRobot()}}</p>-->\r\n"

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
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/EnableThreeExamples */ "./src/app/simulator/js/EnableThreeExamples.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_EnableTween__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/EnableTween */ "./src/app/simulator/js/EnableTween.js");
/* harmony import */ var _js_EnableTween__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_EnableTween__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/js/controls/OrbitControls */ "./node_modules/three/examples/js/controls/OrbitControls.js");
/* harmony import */ var three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model.service */ "./src/app/simulator/model.service.ts");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events.service */ "./src/app/simulator/events.service.ts");



// import * as THREE from 'three/build/three.min.js';





var startMoveArm;
var startMoveClaw;
var startWait;
var animationOrder;
var prevMethod;
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
        this.modelService.SimModel.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_2__["Mesh"].prototype);
        this.model = this.modelService.SimModel();
        this.scene.add(this.model);
        this.base = this.model.children[0];
        this.lowerArm = this.model.children[1];
        this.upperArm = this.lowerArm.children[1];
        this.leftClaw = this.upperArm.children[2];
        this.rightClaw = this.upperArm.children[3];
        this.lowerArmLength = (new three__WEBPACK_IMPORTED_MODULE_2__["Box3"]().setFromObject(this.lowerArm)).getSize().y;
        this.upperArmLength = (new three__WEBPACK_IMPORTED_MODULE_2__["Box3"]().setFromObject(this.upperArm)).getSize().x;
        this.origDist = this.leftClaw.position.z - this.rightClaw.position.z - 4;
        this.origLowerArmAngle = this.lowerArm.rotation.z;
        this.pivot = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
        this.origUpperArmAngle = (this.upperArm.rotation.z);
        this.currUpperAngle = (this.upperArm.rotation.z);
    };
    SimulatorComponent.prototype.convertLinearToDegrees = function (posX, posY) {
        /**Courtesy of Kris Hopper**/
        /**updated code**/
        var stepBase = 0;
        var stepElbow = 0;
        var inputDist = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
        var inputAngle = Math.acos((Math.pow(this.lowerArmLength, 2) + Math.pow(this.upperArmLength, 2) - Math.pow(inputDist, 2)) / (2 * this.lowerArmLength * this.upperArmLength));
        var lowerArmAngle = Math.acos((Math.pow(this.upperArmLength, 2) + Math.pow(inputDist, 2) - Math.pow(this.lowerArmLength, 2)) / (2 * this.upperArmLength * inputDist));
        var angShift = Math.acos((Math.pow(posY, 2) - Math.pow(posX, 2) - Math.pow(inputDist, 2)) / (2 * posX * inputDist));
        // Kris converted radians to degree here
        var inputDegree = (180 / Math.PI) * inputAngle;
        var lowerArmDegree = (180 / Math.PI) * lowerArmAngle;
        var degreeShift = (180 / Math.PI) * angShift;
        var degreeElbow = inputDegree + degreeShift;
        var degreeBase = 90 - lowerArmDegree;
        degreeShift = 180 - degreeShift;
        if (posY < 0) {
            degreeBase = degreeBase + degreeShift;
        }
        else if (posY > 0) {
            degreeBase = degreeBase - degreeShift;
        }
        if (degreeElbow > 150) {
            degreeElbow = 150;
        }
        stepBase = degreeBase;
        stepElbow = degreeElbow;
        stepBase = Math.round(stepBase);
        stepElbow = Math.round(stepElbow);
        return [degreeBase, degreeElbow];
    };
    /**Comment this method for now, still testing it with the linear to degrees:**/
    SimulatorComponent.prototype.moveArmFunction = function (posX, posY, isElbowUp) {
        if (isElbowUp === void 0) { isElbowUp = true; }
        console.log('moving in posX:', posX);
        var calculatedAngles = this.convertLinearToDegrees(posX, posY);
        var lowerArmAngle = calculatedAngles[0];
        var upperArmAngle = calculatedAngles[1];
        lowerArmAngle *= (Math.PI / 180);
        upperArmAngle *= (Math.PI / 180);
        var LboundingBox = new three__WEBPACK_IMPORTED_MODULE_2__["Box3"]().setFromObject(this.lowerArm);
        var UboundingBox = new three__WEBPACK_IMPORTED_MODULE_2__["Box3"]().setFromObject(this.upperArm);
        var axis = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 1);
        var lowerArmPivot = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0);
        // assess given base and elbow angles to fit boundaries
        if (lowerArmAngle < -2.5 * Math.PI / 12) {
            lowerArmAngle = -2.4 * Math.PI / 12;
        }
        // need to change upper boundary
        else if (lowerArmAngle > Math.PI / 12) { // was 2.5
            lowerArmAngle = Math.PI / 12;
        }
        if (upperArmAngle < (-9 * Math.PI / 12) - this.sumOfLowArmRotation) {
            console.log('decreasing to lower boundary');
            upperArmAngle = -9 * Math.PI / 12 - this.sumOfLowArmRotation;
        }
        else if (upperArmAngle > (-2 * Math.PI / 12) + this.sumOfLowArmRotation) {
            console.log('increasing to upper boundary');
            upperArmAngle = -2 * Math.PI / 12 + this.sumOfLowArmRotation;
        }
        if ((this.origLowerArmAngle > lowerArmAngle ? this.lowerArm.rotation.z > lowerArmAngle : this.lowerArm.rotation.z < lowerArmAngle)) {
            console.log('in low if statement');
            this.lowerArm.parent.localToWorld(this.lowerArm.position);
            this.lowerArm.position.sub(lowerArmPivot);
            if (this.lowerArm.rotation.z > lowerArmAngle) {
                // angle down
                this.lowerArm.position.applyAxisAngle(axis, -Math.PI / 144);
            }
            else {
                // angle up
                this.lowerArm.position.applyAxisAngle(axis, Math.PI / 144);
            }
            this.lowerArm.position.add(lowerArmPivot);
            this.lowerArm.parent.worldToLocal(this.lowerArm.position);
            if (this.lowerArm.rotation.z > lowerArmAngle) {
                // angle down
                this.lowerArm.rotation.z += -Math.PI / 144;
                this.sumOfLowArmRotation += -Math.PI / 144;
            }
            else {
                // angle up
                this.lowerArm.rotation.z += Math.PI / 144;
                this.sumOfLowArmRotation += Math.PI / 144;
            }
        }
        else if ((this.origUpperArmAngle > upperArmAngle ? this.currUpperAngle > upperArmAngle : this.currUpperAngle < upperArmAngle)) {
            this.testPivot = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.lowerArm.position.x + 10, this.lowerArm.position.y + 30, 2);
            // need to move pivot back to world origin (in this case, where we want the pivot pt to be)
            this.pivot.position.set(50, 160, 2.5);
            this.lowerArm.add(this.pivot);
            this.pivot.add(this.upperArm);
            // alter upper arm position:
            this.upperArm.position.x = -40;
            this.upperArm.position.y = 50;
            this.upperArm.position.z = -2;
            // change direction depending on goal angle
            if (upperArmAngle < this.currUpperAngle) {
                this.pivot.rotation.z += -Math.PI / 144;
                this.currUpperAngle += -Math.PI / 144;
            }
            else {
                this.pivot.rotation.z += Math.PI / 144;
                this.currUpperAngle += Math.PI / 144;
            }
        }
        else {
            prevMethod = animationOrder[0][0];
            animationOrder.shift();
        }
    };
    SimulatorComponent.prototype.moveClawFunction = function (distanceApart) {
        var currentDistApart = this.leftClaw.position.z - this.rightClaw.position.z - 4;
        // default: currentDistApart = 24
        // max: currentDistApart = 24
        // min: currentDistApart = 0 (approx)
        // if given is above max, only reach til max
        if (distanceApart > 24) {
            distanceApart = 24;
        }
        // if given is below min, only reach til min
        else if (distanceApart < 0) {
            distanceApart = 0;
        }
        if ((this.origDist > distanceApart ? currentDistApart > distanceApart : currentDistApart < distanceApart)) {
            if (currentDistApart > distanceApart) {
                // closes
                // this.leftClaw.position.z -= Math.PI / 60;
                // this.rightClaw.position.z += Math.PI / 60;
                this.leftClaw.position.z -= .05;
                this.rightClaw.position.z += .05;
            }
            else {
                // opens
                // this.leftClaw.position.z += Math.PI / 60;
                // this.rightClaw.position.z -= Math.PI / 60;
                this.leftClaw.position.z += .05;
                this.rightClaw.position.z -= .05;
            }
        }
        else {
            // update origDist
            this.origDist = this.leftClaw.position.z - this.rightClaw.position.z - 4;
            prevMethod = animationOrder[0][0];
            animationOrder.shift();
        }
    };
    SimulatorComponent.prototype.wait = function (timeToWait) {
        // add timer here
        setTimeout(function () {
            console.log('Waited ' + timeToWait + ' milliseconds!');
            // alert('Waited ' + timeToWait + ' milliseconds!');
            return;
        }, timeToWait);
        prevMethod = animationOrder[0][0];
        animationOrder.shift();
    };
    SimulatorComponent.prototype.resetModel = function () {
        this.scene.remove(this.model);
        this.createModel();
    };
    SimulatorComponent.prototype.render = function () {
        var component = this;
        // looks at the animation order and calls each animation method accordingly
        if (animationOrder != null && animationOrder.length !== 0) {
            // get first method called
            var animMethod = animationOrder[0];
            // checks to see which animation method is being called
            if (animMethod[0] == 'moveArm') {
                if (prevMethod != null && prevMethod == 'moveArm') {
                    console.log('MODEL TEST');
                    // add wait to make transition less jerky
                    // setTimeout(function () {
                    //   component.resetModel();
                    //   // return;
                    // }, 4000);
                    // console.log('reseted model!');
                    this.resetModel();
                    component.sumOfLowArmRotation = 0;
                    prevMethod = '';
                }
                this.moveArmFunction(animMethod[1], animMethod[2], animMethod[3]);
                this.renderer.render(this.scene, this.camera);
            }
            else if (animMethod[0] == 'moveClaw') {
                this.moveClawFunction((animMethod[1]));
                this.renderer.render(this.scene, this.camera);
            }
            else if (animMethod[0] == 'wait') {
                this.wait(animMethod[1]);
                this.renderer.render(this.scene, this.camera);
            }
        }
        this.renderer.render(this.scene, this.camera);
    };
    SimulatorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
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
            if (animationOrder.length == 1) {
                _this.sumOfLowArmRotation = 0;
                prevMethod = '';
                _this.resetModel();
            }
        });
        this.eventsService.on('moveClaw', function (distanceApart) {
            console.log('moveClawFunction called via event');
            console.log('Received arguments: ' + distanceApart);
            startMoveClaw = [];
            startMoveClaw[0] = 'moveClaw';
            startMoveClaw[1] = distanceApart;
            animationOrder.push(startMoveClaw);
            if (animationOrder.length == 1) {
                _this.sumOfLowArmRotation = 0;
                prevMethod = '';
                _this.resetModel();
            }
        });
        this.eventsService.on('wait', function (waitTime) {
            console.log('waitFunction called via event');
            console.log('Received arguments: ' + waitTime);
            startWait = [];
            startWait[0] = 'wait';
            startWait[1] = waitTime;
            animationOrder.push(startWait);
            if (animationOrder.length == 1) {
                _this.sumOfLowArmRotation = 0;
                prevMethod = '';
                _this.resetModel();
            }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"], _events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"]])
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

module.exports = __webpack_require__(/*! C:\Pulled_KLAW\KLAW-Web\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map