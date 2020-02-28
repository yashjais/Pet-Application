import axios from '../config/axios'

export const setServices = (services) => {
    return {
        type: 'SET_SERVICES', payload: services
    }
}

export const startSetServices = (services, token) => {
    return dispatch => {
        axios.get('/services', {
            headers: {
                'x-auth': token
            }
        })
            .then(response => {
                const services = response.data
                dispatch(setServices(services))
            })
            .catch(err => alert(err))
    }
}