import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {startGetUserIndex} from './actions/user'
import {startGetProfile} from './actions/profile'
import {startGetAllProfile} from './actions/profile'
import {startGetPets} from './actions/pets'

const store = configureStore()


store.subscribe(() => {
    console.log('in the index', store.getState())
})

if(localStorage.getItem('authToken')){
    const token = localStorage.getItem('authToken')
    store.dispatch(startGetUserIndex(token))
    store.dispatch(startGetProfile(token))
    store.dispatch(startGetAllProfile(token))
    store.dispatch(startGetPets(token))
    // startGetProfile(token)
}

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'))