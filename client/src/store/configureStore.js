import {combineReducers, createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import petsReducer from '../reducers/petsReducer'
import reviewReducer from '../reducers/reviewReducer'
import profileReducer from '../reducers/profileReducer'
import profilesReducer from '../reducers/profilesReducer'
import serviceReducer from '../reducers/serviceReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        pets: petsReducer,
        review: reviewReducer,
        services: serviceReducer,
        profile: profileReducer,
        profiles: profilesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore