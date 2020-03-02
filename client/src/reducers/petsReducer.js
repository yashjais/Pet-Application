const initialState = []

const petsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PETS': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default petsReducer