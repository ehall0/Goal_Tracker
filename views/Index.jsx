const React = require('react');
const Layout = require('./components/Layout.jsx')
class Index extends React.Component {
  render() {
    const logout = (<form action="/sessions/?_method=delete" method="post">
          <input type="submit" value="Logout"/>
      </form>)
    return (
        <Layout>
          <div id='index'>
            <h1>Goals Tracker</h1>
            <h4>{this.props.username}</h4>
            {this.props.username? logout: ''}
            <nav>
                <a className= 'newGoal' href= "/goals/new"> Add New Goal</a>
            </nav>
            
            <div className= "list-group">
                {
                   this.props.goals.map((goal, i) => {
                    return (
                        <div>
                          <a href={`/goals/${goal._id}`} className="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{goal.timeframe}/{goal.name} {goal.isGoalReached ? <span>&#9745;</span> : <span>&#9744;</span> }</h5>
                            {/* <h4>{goal.isGoalReached ? <span>&#9745;</span> : <span>&#9744;</span> }</h4> */}
                            <small> <form action ={`/goals/${goal._id}?_method=DELETE`} method ="post">
                                    <input className="btn btn-danger" type="submit" value="delete"/>
                                  </form></small>
                          </div>
                          <p className="mb-1">{goal.goal}</p>
                          
                        </a>
                        <br></br>
                        </div>
                        )
                    })
                }
           </div>
           </div>
        </Layout> );
  }
}

module.exports = Index;