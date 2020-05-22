const React = require('react');
const Layout = require('./components/Layout.jsx')
class Show extends React.Component {
    render(){
        return (
            <Layout>
               { 
            //    this.props.goals.map((goal, i) => {
            //         return (
                 <div>
                <h1>{this.props.goal.timeframe}</h1>
                <p>{this.props.goal.goal}</p>
                <h4>{this.props.goal.isGoalReached ? `Goal Accomplished!` : `This goal has not been met.` }</h4>
                <small><a href = {`/goals/edit/${this.props.goal._id}`}>edit this {this.props.goal.timeframe} goal</a></small>
                <br/>
                <a href= '/goals/'>Back to Goals</a>
                </div>
            //         )
            //    }
            //    )
               }
            </Layout>
        )
    }}
module.exports = Show;