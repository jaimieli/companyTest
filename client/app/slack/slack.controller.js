'use strict';

angular.module('companyTestApp')
  .controller('SlackCtrl', function ($scope, $http) {
    this.message = {};
    this.sendSlack = function(input){
      $http.post('/api/messages/sendMessage', input).success(function(data){
        console.log(data);
      })
    }
  });
