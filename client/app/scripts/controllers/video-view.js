'use strict';

angular.module('clientApp')
.controller('VideoViewCtrl', function($scope, $routeParams, Video){

  //tabs added to navigation
  $scope.viewMore=true;

  //using Restangular's commands one() and get(), and $object
  //one() creates a Restangular object from the routeParams and it's id
  $scope.video=Video.one($routeParams.id).get().$object;

});
