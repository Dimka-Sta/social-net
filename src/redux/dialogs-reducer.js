const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initialState = {
        dialogsData: [
            { id: 1, photoUrl:'https://thumb.tildacdn.com/tild3464-6131-4164-b865-646530623536/-/resize/674x/-/format/webp/1.png', name: 'Dimka' },
            { id: 2, photoUrl:'https://d2z9uwnt8eubh7.cloudfront.net/media/default/0001/25/c585bf37eba1a4540d4715b87e3f445e6f1e0675.jpeg', name: 'Lizka' },
            { id: 3, photoUrl:'https://quto.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2020/10/21/22/4292528/62b39e6b0701eedfc78370f679fa0c774968e96c.jpg', name: 'Mishka' },
            { id: 4, photoUrl:'https://cargoline.com.ua/img/rastamogka-avto-iz-chehii.jpg', name: 'Danka' },
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

            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id:6, message: body} ]
            };
                   
        case UPDATE_NEW_MESSAGE_BODY:
            
            return {
                ...state,
                newMessageBody: action.body
            }

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