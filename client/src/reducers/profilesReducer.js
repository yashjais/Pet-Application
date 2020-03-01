const initialState = []

const profilesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PROFILES': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default profilesReducer