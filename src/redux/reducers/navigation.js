const initialState = {
    title: undefined,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TITLE":
            return Object.assign({}, state, {
                title: action.payload
            })
        case "@@router/LOCATION_CHANGE":
            return Object.assign({}, state, {
                title: undefined
            })
        default:
            return {
                ...state
            }
    }
}
  
  export default reducer