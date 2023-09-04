import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

    _state: {

        profilePage: {
            postsData: [
                { id: 1, message: 'How are you?', likesCount: "likes 10" },
                { id: 2, message: 'My first post!', likesCount: "Likes 20" },
            ],
            newPostText: ''

        },

        dialogsPage: {
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
        },

        sidebar: {

        },
    },

    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 'Likes 0',
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },


    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);

            }
};

export default store;
window.store = store;