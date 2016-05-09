'use strict';

//query list of videos using restangular's getList() and $object
angular.module('clientApp')
.controller('VideosCtrl', function($scope, Video){

  //dynamically populate list using $object to keep up with any changes
  $scope.videos=Video.getList().$object;

});
