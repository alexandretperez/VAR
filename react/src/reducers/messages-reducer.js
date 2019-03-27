const messagesReducer = (
    state = {
        messages: []
    },
    action
) => {
    switch (action.type) {
        case 'MESSAGES_ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case 'MESSAGES_CLEAR_MESSAGE':
            return {
                messages: []
            };
        default:
            return state;
    }
};

export default messagesReducer;
