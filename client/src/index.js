import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {startGetUserIndex} from './actions/user'
import {startGetProfile} from './actions/profile'

const store = configureStore()


store.subscribe(() => {
    console.log('in the index', store.getState())
})

if(localStorage.getItem('authToken')){
    const token = localStorage.getItem('authToken')
    store.dispatch(startGetUserIndex(token))
    store.dispatch(startGetProfile(token))
    // startGetProfile(token)
}

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'))