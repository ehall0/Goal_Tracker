const express=require('express');
const mongoose =require('mongoose');
const app =express();
const PORT = process.env.PORT || 3000; /****I am different****/
const db = mongoose.connection;
const show = console.log;


const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2';/****I am different****/

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true})/****I am different****/
db.on('open', ()=> {show('Mongo works')})



app.listen(PORT, ()=> {
    show('I am connected')
})/****Make sure this doesnt say 3000 YOU HAVE TO USE PORT****/