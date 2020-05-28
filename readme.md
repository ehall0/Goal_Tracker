Goal Tracker

https://emmahall-project2.herokuapp.com/goals/

Goal Tracker is a full crud app designed to help keep track of daily, monthly, and yearly goals. 

For this project I used two controllers, one for users routes, and the other for the goal routes. The goals controller has an Index, New, Create, Edit, Update, Show, and Delete Route as well as three seperate routes for Daily, Monthly, and Yearly show pages in order to filter the data by timeframe.

I have two Schemas one for goals which has timeframe, name, goal, and isGoalReached. Inside the user schema are username and password for user authentication.

I started this project out by brainstorming the different features I wanted it to have as well as a general styling idea. After having almost all of my routes working I then began to style using a combonation of Bootstrap framework and plain css for personal touches. 

I would've liked to have gone back and figured out how to make it so when you log on youcan only see your unique goals. Instead of it being shared , and only neding to login to be able to edit/create/delete. 