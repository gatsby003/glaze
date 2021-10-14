const loader = (state=true, action) => {
    switch(action.type){
        case 'ON':
            return true
        case 'OFF':
            return false
        default:
            return state
    }
}

export const loaderOn = () => {
    return async dispatch => {
        dispatch({
            type : 'ON'
        })
    }   
}


export const loaderOff = () => {
    return async dispatch => {
        dispatch({
            type : 'OFF'
        })
    }   
}

export default loader