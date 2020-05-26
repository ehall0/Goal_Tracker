const React = require('react');
const Layout = require('./components/Layout.jsx')
class Show extends React.Component {
    render(){
        return (
            <Layout>
               <h1 className="index-title">Goal Tracker</h1>
                 <div className="jumbotron show-page">
                <h1 >{this.props.goal.timeframe}</h1>
                <p>{this.props.goal.goal}</p>
                <h4>{this.props.goal.isGoalReached ? `Goal Accomplished!` : `This goal has not been met.` }</h4>
                <small><a href = {`/goals/edit/${this.props.goal._id}`}>Edit this {this.props.goal.timeframe} Goal</a></small>
                <br/>
                <a href= {`/goals/view/${this.props.goal.timeframe}`}>Back to {this.props.goal.timeframe} Goals</a>
                </div>
          
            
            </Layout>
        )
    }}
module.exports = Show;