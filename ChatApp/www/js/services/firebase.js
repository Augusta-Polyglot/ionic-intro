/**
 * Created by Justin on 12/30/2014.
 */
angular.module('firebase.chat',[]).factory('chat', [function(){
  var chats = new Firebase('https://awesomenaut-studios.firebaseio.com/chats');
  return {
    sendMessage: function(name, message, errorCallback){
      chats.push({name: name, message: message}, errorCallback ? errorCallback : function(){});
    },
    onMessageReceived: function(callback, errorCallback) {
      chats.on('child_added', function (snapshot) {
        var chatData = snapshot.val();
        callback(chatData.name, chatData.message);
      }, function (errorObj) {
        if (errorCallback) {
          errorCallback(errorObj);
        }
      });
    }
  }
}]);