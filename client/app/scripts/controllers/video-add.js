'use strict';

angular.module('clientApp')
.controller('VideoAddCtrl', function($scope, $location, Video){

  //create video object and attach to scope
  $scope.video={};

  //from view ng-click=saveVideo()
  //function will call Video object and post it to url
  //promises to call the callback function to change our url route to '/videos' to view list w/ added object
   $scope.saveVideo=function(){

     Video.post($scope.video).then(function(){

       $location.path('/videos');

     });
   };
});
