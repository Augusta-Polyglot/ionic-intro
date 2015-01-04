/**
 * Created by Justin on 1/2/2015.
 */
angular.module('starter.controllers')
.controller('SettingsCtrl', ['$scope', 'settings', function($scope, settings) {

    $scope.user = {};

    $scope.saveSettings = function(){
      settings.setName($scope.user.name);
    };

}]);