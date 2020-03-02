import axios from '../config/axios'

export const getPets = (pets) => {
    return {
        type: 'GET_PETS', payload: pets
    }
}

export const startGetPets = (token) => {
    return (dispatch) => {
        axios.get('/pets', {
            headers: {
                'x-auth': token
            }
        })
            .then(response => {
                const pets = response.data
                dispatch(getPets(pets))
            })
            .catch(err => {
                alert(err)
            })
    }
}   