# FavVidsApp

MEAN stack application with CRUD capability.

Yeoman
- npm install -g yo
- npm install -g yo-generator-angular
- 'yo angular'
- rest-angular instead of angular-resource.js
- quick CRUD
  - yo angular:route video-add --uri=create/video
  - yo angular:route video-view --uri=video/:id
  - yo angular:route video-delete --uri=video/:id/delete
  - yo angular:route video-edit --uri=video/:id/edit

Grunt
- npm install -g grunt-cli
  - install to run in any directory
- 'grunt serve'

 Bower
 -'bower install'

using node-restful
- takes mongoose model and converts it to REST API
- auto does CRUD

using a directive for youtube
- create a directive for youtube urls to appear in iframe
- directive('youtube', function(){})...
- use filter('trusted', function()) to allow youtube resource

using body-parser
- urlencoded to allow proper url syntax to be POSTED

using express
-  create server

using mongoose
- create schema with title, and url parameters as strings

using restangular
- fetch data from local server
- reconfig default 'id' to accept '_id '
-one()
  - creating a restangular object from $routeParams.id
- get()
- getList()
  - $object to dynamically populate result: $scope.videos=Video.getList().$object

using lodash
- _.each
Lodash makes JavaScript easier by taking the hassle out of working with arrays,
numbers, objects, strings, etc. Lodash’s modular methods are great for:

Iterating arrays, objects, & strings
Manipulating & testing values
Creating composite functions

- Patrick Funom Tunga-Lergo
