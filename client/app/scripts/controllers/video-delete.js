'use strict';

angular.module('clientApp')
.controller('VideoDeleteCntrl', function($scope, $location, Video, $routeParams){

  //grab the object from locating it's route parameter
  //store in variable video to be deleted in deleteVideo function
  $scope.video=Video.one($routeParams.id).get().$object;

  //call the delete function invoked from the view
  $scope.deleteVideo=function(){

    //remove the video object
    $scope.video.remove().then(function(){

      $location.path('/videos');

    });
  };
    //redirect back to video page
    $scope.back=function(){

      $location.path('/video/'+$routeParams.id);

    };
  });
