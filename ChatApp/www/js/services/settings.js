/**
 * Created by Justin on 1/4/2015.
 */
angular.module('starter.controllers').factory('settings', [function() {

  var data = {
    name: ""
  };

  //Returning an object of getters/setters isolates the actual data
  //It's kind of pointless in this case, but if you had some data
  //you needed to keep private, this would be the way to do it.

  return {
    setName: function(name){
      data.name = name;
    },
    getName: function(){
      return data.name;
    }
  };

}]);