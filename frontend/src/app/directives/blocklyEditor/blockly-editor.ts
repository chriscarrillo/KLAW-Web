//blocklyEditor will hold the primary functonality of the blockly code editor and will allow users to drag code blocks to make procedures
(function () {
    'use strict';

    angular.module('blocklyEditor', [])
        .directive('blocklyEditor', function () {
            return {
                restrict: 'E',
                templateUrl: '/app/directives/blocklyEditor/blockly-editor.html',
                scope: {
                    procedure: '=' //this will be passed in from the homePage like this: <blockly-editor procedure="homePageCtrl.procedure"></blockly-editor> 
                },
                link: function (scope, elem, attrs, ngModelCtrl) {
                    //all of our functions will go here
                    //we can access the current procedure with scope.procedure
                }
            };
        });
})();