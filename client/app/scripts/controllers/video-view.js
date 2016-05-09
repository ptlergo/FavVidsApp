'use strict';

angular.module('clientApp')
.controller('VideoViewCtrl', function($scope, $routeParams, Video){

  $scope.viewMore=true;
  $scope.video=Video.one($routeParams.id).get().$object;
  
});
