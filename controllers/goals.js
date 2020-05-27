const express =require('express')
const goalsController = express.Router()
const mongoose = require('mongoose')
const Goal = require('../models/goals.js')
const show = console.log
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }


/////////////////////////
//Presentational Routes//
/////////////////////////

//////Index route////////
goalsController.get('/', (req,res)=>{
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
/////New Route//////
goalsController.get('/new',isAuthenticated, (req, res)=>{
    res.render('New');
});

//////Seed Route///////
goalsController.get('/seed', (req,res)=> {
    Goal.create([
        {
            timeframe:'Daily',
            name: 'Chris',
            goal:'Go to the grocery store',
            isGoalReached:true
        },
        {
            timeframe:'Monthly',
            name: 'Joe',
            goal:'Get a job',
            isGoalReached:true
        },
        {
            timeframe:'Weekly',
            name: 'Jenn',
            goal:'Run 3 times by the river',
            isGoalReached:false
        },
        {
            timeframe:'Daily',
            name: 'Sally',
            goal:'complete homework',
            isGoalReached:true
        },
        {
            timeframe:'Yearly',
            name: 'Emily',
            goal:'Sell current car and buy a new one',
            isGoalReached:true
        },
        {
            timeframe:'Yearly',
            name: 'Bob',
            goal:'Graduate college',
            isGoalReached:false
        },
    ], (error, newGoals) => {
        res.redirect('/goals')
    })
})
//////Edit//////
goalsController.get('/edit/:id',isAuthenticated, (req,res) => {
    Goal.findById(req.params.id , (error, foundGoal)=> {
        res.render('Edit', {goal: foundGoal});
    })
});
/////////////////////////
////Functional Routes////
/////////////////////////
////Create Route////
goalsController.post('/',isAuthenticated, (req, res)=>{
    // console.log('this is the body before we change it')
    // console.log(req.body);
    if(req.body.isGoalReached === 'on'){
        req.body.isGoalReached = true
    }else{
        req.body.isGoalReached = false
    }
    // console.log('this is the body after we change it')
    console.log(req.body)
    Goal.create(req.body, (error, createdGoal)=> {
        if(error){
            show(error)
        }else{
        
            res.redirect('/goals')
            
            
        }
    })
});


// ///////Delete Route////////
goalsController.delete('/:id',isAuthenticated,(req,res) =>{
   Goal.findByIdAndRemove(req.params.id,(err, data)=> {
        res.redirect(`/goals/`)
    })
 })

////UPDATE ROUTE/////
goalsController.put('/edit/:id', isAuthenticated,(req,res) => {
    if(req.body.isGoalReached === 'on'){
        req.body.isGoalReached = true;
    }else{
        req.body.isGoalReached= false;
    }
    Goal.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/goals/');
    });
});

//////Show Route//////
goalsController.get('/:id',isAuthenticated, (req,res) => {
   
    Goal.findById(req.params.id, (error, foundGoal) => {
        if(error) {
            show(error)
        }else{
           res.render('Show', {
               goal: foundGoal,
                username: req.session.currentUser,
           })
        }
    })
})

//////Daily  route///////
goalsController.get('/view/daily' ,(req,res)=>{
    const thisRunsNext=  (error, allGoals) => {
        if(error){
            show(error)
        }else{
            const props= {
                goals: allGoals,
                username: req.session.currentUser,
            }
        res.render('GoalPeriod', props)
        }
    }
    Goal.find({timeframe: 'Daily'}, thisRunsNext)
})
//////Monthly route///////
goalsController.get('/view/monthly' ,(req,res)=>{
    const thisRunsNext=  (error, allGoals) => {
        if(error){
            show(error)
        }else{
            const props= {
                goals: allGoals,
                username: req.session.currentUser,
            }
        res.render('GoalPeriod', props)
        }
    }
    Goal.find({timeframe: 'Monthly'}, thisRunsNext)
})
//////Yearly  route///////
goalsController.get('/view/yearly',(req,res)=>{
    const thisRunsNext=  (error, allGoals) => {
        if(error){
            show(error)
        }else{
            const props= {
                goals: allGoals,
                username: req.session.currentUser,
            }
        res.render('GoalPeriod', props)
        }
    }
    Goal.find({timeframe: 'Yearly'}, thisRunsNext)
})

module.exports = goalsController