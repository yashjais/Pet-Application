import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import configureStore from './store/configureStore'
import {setUser} from './actions/user'

const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log('in the index', store.getState())
})

console.log(store, 'store')

store.dispatch(setUser())

ReactDOM.render(<App />, document.getElementById('root'))