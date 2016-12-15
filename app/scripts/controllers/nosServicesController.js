/**
 * Created by sonia on 2016-12-07.
 */
'use strict';

angular.module('interTechApp')

    .run(['$rootScope', function ($rootScope) {
        $rootScope.records = [
            {
                id: 1, title: 'Miss Beulah Roob'
                , content: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
            + "Nullam id dolor id nibh ultricies vehicula ut id elit."
            + "Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
            + "Praesent commodo cursus magna.",
                img_scr: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            },
            {
                id: 2, title: 'Trent Morissette'
                , content: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula,'
            + 'eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet'
            + 'fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum'
            + 'nibh.',
                img_scr: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            },
            {
                id: 3, title: 'Miss Ava Pouros'
                , content: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
            + 'Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo,'
            + 'tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
                img_scr: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
        ];
    }])
    .controller('nosServicesCtl', ['$scope',function ($scope) {
        $scope.template ={ name: 'nosServices', url: 'views/nosServices.html'}
    }])
    .controller('ProfileController', ['$rootScope', '$routeParams',
        function ProfileController($rootScope, $routeParams) {
            var index = parseInt($routeParams.id, 10);
            var record = $rootScope.records[index - 1];
            this.content = record.content;
            this.title = record.title;
            this.id = record.id;
        }]);


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */