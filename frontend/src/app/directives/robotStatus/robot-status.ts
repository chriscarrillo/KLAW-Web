//robotStatus takes in a robot. if the robot is defined, then it will display the status as 'online'
//also, this directive will allow users to input connections strings to connect to their robot
(function () {
    'use strict';

    angular.module('robotStatus', [])
        .directive('robotStatus', function () {
            return {
                restrict: 'E',
                templateUrl: '/app/directives/blocklyEditor/robot-status.html',
                scope: false, //set to false because we want changes to the robot here to also change the homePage's robot
            };
        });
})();