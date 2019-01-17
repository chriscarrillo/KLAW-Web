//profile settings will take in a user and save changes to to user's profile like email/password/etc.
(function () {
    'use strict';

    angular.module('profileSettings', [])
        .directive('profileSettings', function () {
            return {
                restrict: 'E',
                templateUrl: '/app/directives/blocklyEditor/profile-settings.html',
                scope: {
                    user: '=' //this will be passed in from the homePage like this: <profile-settings user="homePageCtrl.user"></profile-settings> 
                },
                link: function (scope, elem, attrs, ngModelCtrl) {
                    //all of our functions will go here
                    //we can access the current user with scope.user
                }
            };
        });
})();