import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import {startRemoveUser} from './actions/user'

import About from './About'
import Home from './Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'


function App(props) {
    console.log(props, 'in the app')
    const handleLogout = () => {
        const redirect = () => window.location.href = '/'
        const token = localStorage.getItem('authToken')
        if(token) {
            props.dispatch(startRemoveUser(token, redirect))
        } else {
            this.history.push('/users/login')
        }
    }
    return (
        <div>
            <BrowserRouter>
            <h2>Pet Application</h2>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>

            {isEmpty(props.user) ? (
                <div> 
                    <Link to='/users/register'>Register</Link>
                    <Link to='/users/login'>Login</Link>
                </div>
            ) : (
                <div> 
                    {/* some link authenticated of pets */}
                    <Link to='/users/account'>Account</Link>
                    <Link to='#' onClick={handleLogout}>Logout</Link>
                </div> 
            )}
            
            
            <Route path='/' component={Home} exact={true} />
            <Route path='/about' component={About} />
            <Route path='/users/register' component={Register} />
            <Route path='/users/login' component={Login} />
            <Route path='/users/account' component={Account} />
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