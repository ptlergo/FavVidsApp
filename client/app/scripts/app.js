'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
      .factory('VideoRestangular', function(Restangular){

        return Restangular.withConfig(function(RestangularConfigurer){
          RestangularConfigurer.setRestangularFields({
            id: '_id'
          });
        });
      })
      //factory to create new video objects
      .factory('Video', function(VideoRestangular){

        return VideoRestangular.service('video');//points to url in api
      })
      .otherwise({
        redirectTo: '/'
      });
  });
