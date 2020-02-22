import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {setUser} from './actions/user'

const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log('in the index', store.getState())
})

console.log(store, 'store')

store.dispatch(setUser())

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'))