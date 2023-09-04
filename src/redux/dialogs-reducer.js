const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initialState = {
        dialogsData: [
            { id: 1, name: 'Dimka' },
            { id: 2, name: 'Lizka' },
            { id: 3, name: 'Mishka' },
            { id: 4, name: 'Danka' },
        ],
        messagesData: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Good and you?' },
            { id: 4, message: 'Are you maaad??' },
        ],
        newMessageBody: ''
};

const dialogsReducer = (state=initialState , action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 6, message: body });
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default:
            return state;
    }
};


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
};

export default dialogsReducer;