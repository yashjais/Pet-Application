import axios from '../config/axios'

export const startGetServices = (token) => {
    return dispatch => {
        axios.get('/services',{
            headers: {
                'x-auth': token
            }
        })
            .then(response => {
                const services = response.data
                // dispatch(setServi)
            })
    }
}