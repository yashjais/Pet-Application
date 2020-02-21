import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import About from './about'

function App(props) {
    return (
        <div>
            <BrowserRouter>
            <h2>Pet Application</h2>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>

            <Route path='/about' component={About} />
            </BrowserRouter>
        </div>
    )
}

export default App