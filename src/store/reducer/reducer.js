const INITIAL_STATE = {
    authenticated: 'false'
}
export default (states = INITIAL_STATE, action) => {
    switch(action.type){
        case 'AUTHENTICATED':
            return ({
                ...states,
                authenticated: action.payload
            })
        default:
            return states
    }
}