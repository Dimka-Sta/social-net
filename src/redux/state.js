let store = {
    
    _state: {

        profilePage: {
            postsData: [
                { id: 1, message: 'How are you?', likesCount: "likes 10" },
                { id: 2, message: 'My first post!', likesCount: "Likes 20" },
            ],
            newPostText: 'kamasutra.com'
    
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
            newMessageText: 'Hi!'
        },
    
        sidebar: {
    
        },
    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log('state changed')
    },
    addPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 'Likes 0',
        };
    
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    addMessage () {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        };
    
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;