'use strict';

angular.module('companyTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('slack', {
        url: '/slack',
        templateUrl: 'app/slack/slack.html',
        controller: 'SlackCtrl',
        controllerAs: 'Slack'
      });
  });