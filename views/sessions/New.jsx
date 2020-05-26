const React =require('react');
const Layout = require('../components/Layout.jsx')
class LoginUser extends React.Component{
    render() {
        return(
            <Layout>
            <div>
            <h1 className="index-title">Goal Tracker</h1>
                <h1 className="edit-goal">Login</h1>
                <a className= "nav-link" href='/user/new'>Create New Account</a>
                <form className="newForm" action="/sessions/" method="POST">
                    <div className="form-group">
                    <label for="exampleInputEmail1">username</label> <input class="form-control" type="text" name="username" /></div>
                    <br />
                    <div className="form-group">
                    <label for="exampleInputEmail1">password</label> <input class="form-control" type="password" name="password" /></div>
                    <br />
                    <input type="submit" className= "btn btn-secondary" value="Login" />
                </form>
            </div>
            </Layout>
        );
    }
}

module.exports = LoginUser;