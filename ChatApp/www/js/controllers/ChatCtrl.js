/**
 * Created by Justin on 1/2/2015.
 */
angular.module('starter.controllers')
.controller('ChatCtrl', ['$scope', '$window', '$log', '$timeout', 'chat', 'settings', function($scope, $window, $log, $timeout, chat, settings) {

    $scope.chats = [];
    $scope.user = {};

    chat.onMessageReceived(function(name, message){
      $scope.chats.push({name: name, message: message});
      $scope.user.message = "";
      $timeout(function(){},0);
    }, function(errObj){
      $window.alert('Error receiving message');
      $log.log(errObj);
    });

    $scope.send = function(){
      chat.sendMessage(settings.getName(), $scope.user.message);
    };

}]);