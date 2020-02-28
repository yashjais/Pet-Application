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
    return (dispatch) => {
        axios.post('/profile', profile,{
            headers: {
                'x-auth': token
            }
        })
            .then(response => {
                const profile = response.data
                console.log(profile)
                dispatch(setProfile(profile))
                redirect()
            })
            .catch(err => {
                alert(err)
            })
    }
}

export const startUpdateProfile = (profile, id, redirect, token) => {
    return (dispatch) => {
        axios.put(`/profile/${id}`, profile, {
            headers: {
                'x-auth': token
            }
        })
            .then(response => {
                const profile = response.data
                console.log(profile)
                dispatch(setProfile(profile))
                console.log('in action')
                redirect()
            })
            .catch(err => alert(err))
    }
}