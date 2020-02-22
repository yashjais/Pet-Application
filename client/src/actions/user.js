import axios from '../config/axios'

// coming from login request
export const startGetUser = (user, redirect) => {
    return (dispatch) => {
        axios.post('/users/login', user)
            .then(response => {
                if(response.data == 'invalid email / password') {
                    alert('invalid email/password')
                } else {
                    const token = response.headers["x-auth"]
                    console.log('token', token)
                    console.log('header', response.headers)
                    console.log('response', response)
                    localStorage.setItem('authToken', token)
                    dispatch(setUser(user))
                    redirect()
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
                    redirect()
                }
            })
            .catch(err => alert(err))
    }
}

// coming from index, if the token is in local storage already -- also check for if the token is there in local storage but not in the backend -- so what should we do 
export const startGetUserIndex = (token) => {

}

// coming from the login functionality
export const setUser = (user) => {
    return {
        type: 'SET_USER', payload: user
    }
}