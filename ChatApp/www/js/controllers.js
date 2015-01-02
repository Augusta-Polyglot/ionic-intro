angular.module('starter.controllers', ['firebase.chat'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', ['$scope', 'chat', function($scope, chat) {

    $scope.chats = [];
    $scope.user = {};

    chat.onMessageReceived(function(name, message){
      $scope.chats.push({name: name, message: message});
      $scope.$apply();
    });

    $scope.send = function(){
      chat.sendMessage($scope.user.name, $scope.user.message, function(errObj){
        alert(errObj.message);
      });
    };

}])

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
