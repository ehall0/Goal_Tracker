const React = require('react');
const Layout = require('./components/Layout.jsx')
class Edit extends React.Component {
      render() {
        const {goal} = this.props
    return (
      <Layout>
        <div>
        <h1 className="index-title">Goals Tracker</h1>
            <h3 className="edit-goal">Edit Goal</h3>
            <form className= "newForm" action={`/goals/edit/${goal._id}?_method=put`}method="POST">
              <div className="form-group">
              <label for="exampleInputEmail1">Timeframe</label>
               <input type="text" className="form-control"  name="timeframe" value={goal.timeframe} />
                </div><br/>
                <div className="form-group">
                <label for="exampleInputEmail1">Goal Description</label>
                <input type="textarea" className="form-control"  name="goal" value={goal.goal} /></div><br/>
                <div className="form-group checked">
                <label for="exampleInputEmail1">Goal Reached</label>
                <input type="checkbox" className="form-control"  name="isGoalReached" checked= {goal.isGoalReached ? 'checked' : ''} /></div><br/>
                <input type="submit" className="btn btn-secondary" name="" value="Edit Goal"/>

             </form>
        </div>
        </Layout>);
  }
}

module.exports = Edit