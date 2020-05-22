const React = require('react');
const Layout = require('./components/Layout.jsx')
class New extends React.Component {
  render() {
    return (
        <Layout>
            <h1>New Goal</h1>
            <nav>
                <a href= "/goals"> Back to Goal Tracker</a>
            </nav>
            <form action="/goals" method="POST">
                Name: <input type="text" name="name" /><br/>
                Timeframe: <input type="text" name="timeframe" /><br/>
                Goal: <input type="textarea" name="goal" /><br/>
                Goal Reached: <input type="checkbox" name="isGoalReached" /><br/>
                <input type="submit" name="" value="Create Goal"/>
             </form>
        </Layout>);
  }
}

module.exports = New