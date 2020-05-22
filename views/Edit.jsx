const React = require('react');
const Layout = require('./components/Layout.jsx')
class Edit extends React.Component {
      render() {
        const {goal} = this.props
    return (
      <Layout>
        <div>
            <h1>Edit Goal</h1>
            <form action={`/goals/edit/${goal._id}?_method=put`}method="POST">
                Timeframe: <input type="text" name="timeframe" value={log.title} /><br/>
                Goal: <input type="textarea" name="goal" value={log.entry} /><br/>
                Goal Reached: <input type="checkbox" name="isGoalReached" checked= {goal.isGoalReached ? 'checked' : ''} /><br/>
                <input type="submit" name="" value="Edit Goal"/>

             </form>
        </div>
        </Layout>);
  }
}

module.exports = Edit