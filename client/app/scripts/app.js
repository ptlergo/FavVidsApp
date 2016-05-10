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
  //configure our nested views
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
      .when('/create/video', {
        templateUrl: 'views/video-add.html',
        controller: 'VideoAddCtrl'
      })
      .when('/video/:id', {
        templateUrl: 'views/video-view.html',
        controller: 'VideoViewCtrl'
      })
      .when('/video/:id/delete', {
        templateUrl: 'views/video-delete.html',
        controller: 'VideoDeleteCtrl'
      })
      .when('/video/:id/edit',{
        templateUrl: 'views/video-edit.html',
        controller: 'VideoEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    //factory for Videos
    //allows fetching of list
    .factory('VideoRestangular', function(Restangular){

        //accept '_id' instead of default 'id' in Restangular
        return Restangular.withConfig(function(RestangularConfigurer){

          RestangularConfigurer.setRestangularFields({
            id: '_id'
          });
        });
      })
      //factory to create new video objects
      .factory('Video', function(VideoRestangular){

        return VideoRestangular.service('video');//points to url in api
      });
