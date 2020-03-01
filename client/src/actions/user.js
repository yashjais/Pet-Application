import axios from '../config/axios'
import {startGetProfile} from './profile'
import {startGetAllProfile} from './profile'

// coming from login request
export const startGetUser = (user, redirect) => {
    return (dispatch) => {
        axios.post('/users/login', user)
            .then(response => {
                if(response.data == 'invalid email / password') {
                    alert('invalid email/password')
                } else {
                    const token = response.headers["x-auth"]
                    localStorage.setItem('authToken', token)
                    axios.get('/users/account', {
                        headers: {
                            'x-auth': token
                        }
                    })
                        .then(response => {
                            const user = response.data
                            dispatch(setUser(user))
                            dispatch(startGetProfile(token))
                            dispatch(startGetAllProfile(token))
                            // console.log(redirect)
                            redirect()
                        })
                        .catch(err => alert(err))
                }
            })
            .catch(err => alert(err))
    }
}

// coming from register request // startSetUser
export const startSetUser = (user, redirect) => {
    return (dispatch) => {
        axios.post('/users/register', user)
            .then(response => {
                if(response.data.hasOwnProperty('errors')) {
                    alert(response.data._message)
                } else if(response.data.hasOwnProperty('errmsg')) {
                    alert(response.data.errmsg)
                } else {
                    console.log(redirect)
                    redirect()
                }
            })
            .catch(err => alert(err))
    }
}

// coming from index, if the token is in local storage already -- also check for if the token is there in local storage but not in the backend -- so what should we do 
export const startGetUserIndex = (token) => {
    return (dispatch) => {
        axios.get('/users/account', {
            headers: {
                'x-auth': token
            }
        })
            .then(response => {
                const user = response.data
                dispatch(setUser(user))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// logging out the user
export const startRemoveUser = (token, redirect) => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers: {
                'x-auth':token
            }
        })
            .then(response => {
                console.log(response.data)
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                redirect()
            })
            .catch(err => alert(err))
    }
}

// coming from the login functionality
export const setUser = (user) => {
    return {
        type: 'SET_USER', payload: user
    }
}

export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}