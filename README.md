
# FavVidsApp

## MEAN stack application with CRUD capability.

### [Yeoman](http://yeoman.io/learning/)
```javascript
- npm install -g yo
- npm install -g yo-generator-angular
```
```javascript
  yo angular
```
- **rest-angular instead of angular-resource.js**
- quick CRUD
```javascript
  yo angular:route video-add --uri=create/video
  yo angular:route video-view --uri=video/:id
  yo angular:route video-delete --uri=video/:id/delete
  yo angular:route video-edit --uri=video/:id/edit
  ```

### [Grunt](http://gruntjs.com/getting-started)
>install to run in any directory

```javascript
npm install -g grunt-cli

grunt serve
```

### [Bower](http://bower.io/)

```javascript
bower install
```

##### [node-restful](https://github.com/baugarten/node-restful)
- takes mongoose model and converts it to REST API
- auto does CRUD

##### using a directive for youtube
- **youtube.html** template view for youtube directive
```html
<div class="embed-responsive embed-responsive-16by9">
  <p><iframe class="embed-responsive-item" src="{{ src | trusted }}"></iframe></p>
</div>

```
- **create a directive** for youtube urls to appear in iframe
```javascript
.directive('youtube', function(){

  return{
            //restrict to element tag
            restrict: 'E',
            //scope variable to pass in source
            scope: {
                    src: '='
                   },
            //custom template that replaces element with styling
            templateUrl: 'views/youtube.html'
};
})
```

- **filter** to allow youtube resource
```javascript
.filter('trusted', function($sce){
  return function(url){
    return $sce.trustAsResourceUrl(url);
  };
});
```

##### [body-parser](https://www.npmjs.com/package/body-parser#bodyparserjsonoptions)
- **urlencoded** to allow proper url syntax to be POSTED
  -accepts only UTF-8 encoding
```javascript
  app.use(body_parser.urlencoded({extended: true}));
```

##### [express](http://expressjs.com/)

##### [mongoose](http://mongoosejs.com/docs/)
- create VideoSchema
- **paramters:** *title*, and *url* type String

##### [restangular](https://github.com/mgonto/restangular)
- *fetch data from local server*
>reconfig default 'id' to accept \_id

-using **one()**
  - *creating a restangular object from **$routeParams.id***
- using **get()** to retireve object at specific route

```javascript
  $scope.video=Video.one($routeParams.id).get().$object;
```
- using **getList()** to dynamically populate list with any changes made
```javascript
$scope.videos=Video.getList().$object;
```

##### [lodash](https://lodash.com/docs#forEach)
>Lodash makes JavaScript easier by taking the hassle out of working with arrays,
>numbers, objects, strings, etc. Lodash’s modular methods are great for:

- using **_.each** to loop through routes registry
```javascript
const routes=require('./routes');
_.each(routes, function(controller, route){
  app.use(route, controller(app, route));
});
```

[Patrick Funom Tunga-Lergo](patdesigns.me)
