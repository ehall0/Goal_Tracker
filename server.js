const express=require('express');
const mongoose =require('mongoose');
const app =express();
const PORT = process.env.PORT || 3000; /****I am different****/
const db = mongoose.connection;
const show = console.log;
const Goal = require('./models/goals.js')
const methodOverride = require('method-override')
const goalsController = require('./controllers/goals.js')
require('dotenv').config()
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2';/****I am different****/
const userController = require('./controllers/users_controllers.js')
const session = require('express-session')
const User =require('./models/users.js')
const bcrypt = require('bcrypt')

 /* Middleware */
 app.use(express.urlencoded({extended: true}));
 app.use(methodOverride('_method'))
 app.use(express.static('public'));
 app.set('view engine', 'jsx');
 app.engine('jsx', require('express-react-views').createEngine());
 
 app.use(
     session({
       secret: process.env.SECRET, 
       resave: false, 
       saveUninitialized: false 
     })
   )
//controllers
app.use('/goals', goalsController)
app.use('/user', userController)

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true})/****I am different****/
db.on('open', ()=> {show('Mongo works')})

app.get('/goals', (req,res)=>{
  const thisRunsNext=  (error, allGoals) => {
      if(error){
          show(error)
      }else{
          const props= {
              goals: allGoals,
              username: req.session.currentUser,
          }
      res.render('Index', props)
      }
  }
  Goal.find({}, thisRunsNext)
})

////////////////
//Authorization Routes
/////////////////

app.get('/sessions/new', (req, res) =>{
    res.render('sessions/New', {currentUser: req.session.currentUser})
})
//Authentication Route, Login
app.post('/sessions/', (req,res) =>{
    User.findOne({username: req.body.username}, (err, foundUser)=>{
    if(err){
      res.send(err)
    }else if(!foundUser){
      res.redirect('/user/new')
    }else{
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        req.session.currentUser =foundUser.username
        res.redirect('/goals/');
      }else{
        res.send('WRONG PASSWORD');
      };
    };
  });
});

/////Destroy session/logout Route////

app.delete('/sessions/', (req,res) => {
  req.session.destroy(()=> {
    res.redirect('/goals')
  })
}) 

app.listen(PORT, ()=> {
    show('I am connected')
})/****Make sure this doesnt say 3000 YOU HAVE TO USE PORT****/