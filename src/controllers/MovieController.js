const restful=require('node-restful');

module.exports=function(app, route){

  //setup the controller for REST
  const rest=restful.model(

    'movie',
    //defined in server.js as it requires our model registry ('models/index.js')
    app.models.movie

  ).methods(['get', 'put', 'post', 'delete']); //pass in all methods we need for our api

  //Register this endpoint with the app.
  rest.register(app, route);

  //return middleware
  return function(req, res, next){
    next();
  };
};
