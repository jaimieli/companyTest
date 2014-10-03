'use strict';

angular.module('companyTestApp')
  .controller('SlackCtrl', function ($scope, $http) {
    this.sendSlack = function(input){
      var messageObj = {};
      messageObj.text = input;
      console.log(messageObj);
      $http.post('/api/messages/sendMessage', messageObj).success(function(data){
        console.log(data);
      })
    }
  });
