import axios from '../config/axios'

export const setProfile = (profile) => {
    return {type: 'SET_PROFILE', payload: profile}
}

export const startGetProfile = (token) => {
    return (dispatch) => {
        axios.get('/profile',{
            headers: {
                'x-auth': token
            }
        })
            .then(response => {
                const profile = response.data
                console.log(profile)
                dispatch(setProfile(profile))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// coming from the component
export const startSetProfile = (profile, redirect, token) => {
    axios.post('/profile', profile,{
        headers: {
            'x-auth': token
        }
    })
        .then(response => {
            const profile = response.data
            console.log(profile)
        })
        .catch(err => {
            alert(err)
        })
}