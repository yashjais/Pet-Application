const initialState = []

const serviceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SERVICES': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default serviceReducer