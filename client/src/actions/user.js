import axios from 'axios'

// coming from login request
export const startSetUser = (user, redirect) => {
    return (dispatch) => {
        axios.post('http://localhost:3020/users/login', user)
            .then(response => {
                if(response.data == 'invalid email / password') {
                    alert('invalid email/password')
                } else {
                    const token = response.headers["x-auth"]
                    console.log('token', token)
                    console.log('header', response.headers)
                    console.log('response', response)
                }
            })
            .catch(err => console.log(err))
    }
}

// coming from index, if the token is in local storage already -- also check for if the token is there in local storage but not in the backend -- so what should we do 
export const startGetUser = (token) => {

}

export const setUser = () => {
    return {
        type: 'SET_USER', payload: {name: 'yash'}
    }
}