import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import About from './about'
import Login from './components/users/Login'

function App(props) {
    return (
        <div>
            <BrowserRouter>
            <h2>Pet Application</h2>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users/register'>Register</Link>
            <Link to='/users/login'>Login</Link>

            <Route path='/about' component={About} />
            <Route path='/users/login' component={Login} />
            </BrowserRouter>
        </div>
    )
}

export default App