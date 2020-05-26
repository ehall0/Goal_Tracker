const React =require('react');
const Layout = require('../components/Layout.jsx')
class NewUser extends React.Component{
    render() {
        return(
            <Layout>
            <div>
                <h1 className="index-title">Goals Tracker</h1>
                <h1 className="edit-goal">New User</h1>
                <form className="newForm" action="/user/" method="POST">
                    <div className= "form-group">
                    <label for="exampleInputEmail1">username</label><input className="form-control" type="text" name="username" /></div>
                    <br />
                    <div className="form-group">
                    <label for="exampleInputEmail1">password</label><input className="form-control"type="password" name="password" /></div>
                    <br />
                    <input type="submit" class="btn btn-secondary" value="Create User" />
                </form>
            </div>
            </Layout>
        );
    }
}

module.exports = NewUser