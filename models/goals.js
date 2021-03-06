const {Schema, model} =require('mongoose');

const goalSchema = new Schema ({
    timeframe: String,
    name: String,
    goal: String,
    isGoalReached : {type: Boolean, default: true}
}, { timestamps: true})


module.exports = model('Goal', goalSchema)