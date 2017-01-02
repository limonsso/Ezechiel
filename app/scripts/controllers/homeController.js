/**
 * Created by sonia on 2016-12-10.
 */
'use strict';

angular.module('interTechApp')
    .run(['$rootScope', function ($rootScope) {
        $rootScope.recordAccueil = [
            {
                key: 1,
                title: 'DU MATERIEL INFORMATIQUE DE POINTE',
                preview: 'Laissez-nous vous fournir du materiel informatique de pointe pour... '
            },
            {
                key: 2,
                title: 'UNE EXPERTISE EN CONSULATION',
                preview: 'Notre équipe de consultants saura'
                + ' vous assister et mener rapidement'
                + ' vos projets à terme sans que vous'
                + ' deviez vous soucier de la nature ...'
            },
            {
                key: 3,
                title: 'UN SUPPORT PLUS RAPIDE ET ÉFFICACE',
                preview: 'Nous nous sommes donné comme mandat de répondreplus rapidement que quiconque'
                + ' à tous vos besoins en matière de technologie de l\'information...'
            }
        ]
    }])
    .controller('homeCtl' , ['$scope' , function ($scope) {
        $scope.template ={ name: 'Accueil', url: 'views/Accueil.html'}
    }]);