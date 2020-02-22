import {combineReducers, createStore} from 'redux'

import userReducer from '../reducers/userReducer'
import petsReducer from '../reducers/petsReducer'
import reviewReducer from '../reducers/reviewReducer'
import profileReducer from '../reducers/profileReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        pets: petsReducer,
        review: reviewReducer,
        profile: profileReducer
    }))
    return store
}

export default configureStore