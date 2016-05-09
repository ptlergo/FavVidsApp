const express=require('express');
const mongoose=require('mongoose');
const body_parser=require('body-parser');
const method_override=require('method-override');
const _=require('lodash');

//create app
const app=express();

//.Env file loader
if(!process.env.PORT) dotenv=require('dotenv').load();

//config port to that in .env file. 3000 default port if not defined
const port=process.env.PORT||3000;

//enable body-parser to parse json files
app.use(body_parser.json());

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
