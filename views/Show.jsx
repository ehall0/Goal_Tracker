const React = require('react');
const Layout = require('./components/Layout.jsx')
class Show extends React.Component {
    render(){
        return (
            <Layout>
                <h1>{this.props.goal.timeframe}</h1>
                <p>{this.props.goal.goal}</p>
                <h4>{ this.props.goal.isGoalReached ? `Goal Accomplished!` : `This goal has not been met.` }</h4>
                <a href= '/goals/'>Back to Goals</a>
                
            </Layout>
        )
    }
}
module.exports = Show;