export function changeState (authenticated) {
    return dispatch => {
        dispatch({type: 'AUTHENTICATED', payload: authenticated})
    }
}