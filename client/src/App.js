import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import About from './about'
import Register from './components/users/Register'
import Login from './components/users/Login'

function App(props) {
    console.log(props, 'in the app')
    return (
        <div>
            <BrowserRouter>
            <h2>Pet Application</h2>

            {(Object.keys(props.user).length != 0) ? (
                <div> 
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                </div>
            ) : (
                <div> 
                <Link to='/users/register'>Register</Link>
                <Link to='/users/login'>Login</Link>
                </div> 
            )}
            
            

            <Route path='/about' component={About} />
            <Route path='/users/register' component={Register} />
            <Route path='/users/login' component={Login} />
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)