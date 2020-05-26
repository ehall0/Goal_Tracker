const React = require('react');
const Layout = require('./components/Layout.jsx')
class New extends React.Component {
  render() {
    return (
        <Layout>
           <h1 className="index-title">Goal Tracker</h1>
            <nav className="nav">
                <a className="nav-link" href= "/goals"> Back</a>
            </nav>
            <form className= "newForm" action="/goals" method="POST">
                
                <div class="form-group">
                <label for="exampleInputEmail1">Timeframe</label>
                <input type="text" className="form-control" name="timeframe" /><br/>
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Goal Description</label>
                <input type="text" className="form-control" name="goal" /><br/>
                </div>
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Goal Reached</label>
              </div>
                <input className="btn btn-secondary" type="submit" name="" value="Create Goal"/>
             </form>
        </Layout>);
  }
}

module.exports = New