//saveProcedure takes in a procedure and when the save button is clicked, will save the current procedure to the dataabase
(function () {
    'use strict';

    angular.module('saveProcedure', [])
        .directive('saveProcedure', function () {
            return {
                restrict: 'E',
                templateUrl: '/app/directives/blocklyEditor/save-procedure.html',
                scope: {
                    procedure: '=' //this will be passed in from the homePage like this: <save-procedure procedure="homePageCtrl.procedure"></save-procedure> 
                },
                link: function (scope, elem, attrs, ngModelCtrl) {
                    //all of our functions will go here
                    //we can access the current procedure with scope.procedure
                }
            };
        });
})();