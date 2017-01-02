
'use strict';

angular.module('interTechApp')
    .controller('contactUsCtl', ['$scope',function ($scope) {
        $scope.template = {name: 'Nousjoindre' , url: 'views/Nousjoindre.html'};
        $scope.Visitor = {
            Email: '' ,
            Object: '' ,
            Message: ''
        }
    }]);