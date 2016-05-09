const express=require('express');
const mongoose=require('mongoose');
const body_parser=require('body-parser');
const method_override=require('method-override');
const _=require('lodash');

//create app
const app=express();

//add middleware for REST API
//enable body-parser to parse json files
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));//makes sure proper syntax for urls; errors w/ CRUD if this is missing
app.use(method_override('X-HTTP-Method-Override'));//use put and http methods s


//.Env file loader
if(!process.env.PORT) dotenv=require('dotenv').load();



//add CORS support for public api
app.use(function(req, res, next){

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();

});

//connect to mongo database running on local computer
mongoose.connect('mongodb://localhost/favvids');
mongoose.connection.once('open', function(){

  //config port to that in .env file. 3000 default port if not defined
  const port=process.env.PORT||3000;

  //Load models
  //controllers have access to all models in registry but not vice versa
  //used in MovieController.js for node-restful
  app.models=require('./models/index');

  //Load routes
  const routes=require('./routes');
  _.each(routes, function(controller, route){

    app.use(route, controller(app, route));

  });
  //start server to listen to port
  const server=app.listen(port, function(){

    if(process.env.DEBUG) console.log('NODE SERVER ACTIVE ON ', port);

  });
});

app.use('/hello', function(req, res, next){
  res.send('Hello World!');
  next();
});




// module.exports=server;
