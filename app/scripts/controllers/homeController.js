/**
 * Created by sonia on 2016-12-10.
 */
'use strict';

angular.module('interTechApp')
    .run( function () {

    })
    .controller('homeCtl', ['$scope',function ($scope) {
        $scope.template ={ name: 'Accueil', url: 'views/Accueil.html'}
    }]);