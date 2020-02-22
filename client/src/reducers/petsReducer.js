const initialState = []

const petsReducer = (state = initialState, action) => {
    switch(action.type) {
        default: {
            return [...state]
        }
    }
}

export default petsReducer