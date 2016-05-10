'use strict';

angular.module('clientApp')
.controller('VideoEditCtrl', function($scope, $routeParams, Video, $location ){

  $scope.editVideo=true;

  //declare an empty object video to catch fetch
  $scope.video={};

  //locate the object of focus to fetch
  //promise to save the object in declared video object
  Video.one($routeParams.id).get().then(function(video){
    //stores grabbed object into declared object
    $scope.video=video;
    //call saveVideo function from video-add
    $scope.saveVideo=function(){

      //save the promised object into video object from locating the object's id
      $scope.video.save().then(function(){

        $location.path('/video/'+$routeParams.id);
      });
    };
  });
});
