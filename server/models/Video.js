const mongoose=require('mongoose');

//create mongoose Schema
const VideoSchema=new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

//export the model Schema for model to be required
module.exports=VideoSchema;
