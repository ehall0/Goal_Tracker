const React = require('react');
const Layout = require('./components/Layout.jsx')
class Index extends React.Component {
  render() {
    const logout = (<form action="/sessions/?_method=delete" method="post">
          <input className="btn btn-outline-dark" type="submit" value="Logout"/>
      </form>)
    return (
        <Layout>

          <div id='index'>
            <div className="header" >
            <h1 className="index-title">Goal Tracker</h1>
            <div className= "user-logout">
            <h4 className="user">{this.props.username}</h4>
            <div className='logout'>
            {this.props.username? logout: ''}
            </div>
            </div>
            </div>
            <div className="content">
            <nav  className="jumbotron jumbotron-fluid">
            
                <a className= 'view-goals border-right' href= "/goals/view/daily"><div class="container">
            <h1 class="display-4">Daily</h1>
            <p class="lead">Click to view</p>
          </div></a>
                <br/>
                <a className= 'view-goals border-right' href= "/goals/view/monthly"><div class="container">
            <h1 class="display-4">Monthly</h1>
            <p class="lead">Click to view</p>
          </div></a>
                <br/>
                <a className= 'view-goals' href= "/goals/view/yearly"> <div class="container">
            <h1 class="display-4">Yearly</h1>
            <p class="lead">Click to view</p>
          </div></a>
            </nav>
            </div>
            
           </div>
        </Layout> );
  }
}

module.exports = Index;