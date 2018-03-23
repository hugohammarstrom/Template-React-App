const initialState = {
    screen: {
        width: undefined,
        height: undefined,
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SCREEN_SIZE":
            return Object.assign({}, state, {
                screen: action.payload
            })
        default:
            return {
                ...state
            } 
    }
}
  
  export default reducer