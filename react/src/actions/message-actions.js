export function addMessage(dispatch, msg) {
    dispatch({
        type: 'MESSAGES_ADD_MESSAGE',
        payload: msg
    });
}

export function clearMessages(dispatch) {
    dispatch({
        type: 'MESSAGES_CLEAR_MESSAGE'
    });
}
