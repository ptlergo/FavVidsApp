'use strict';

angular.module('clientApp')
.controller('VideoAddCtrl', function($scope, $location, Video){

  //1st declare video as empty object
  $scope.video={};

  //from view ng-click=saveVideo()
  //function will call Video object and post it to url
  //promises to call the callback function to change our url route to '/videos' to view list w/ added object
   $scope.saveVideo=function(){
     //call Restangular Video object and post object to the url
     Video.post($scope.video).then(function(){

       $location.path('/videos');

     });
   };
});
