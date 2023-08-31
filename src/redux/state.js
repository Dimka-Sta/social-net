let rerenderEntiretree = () => {
    console.log('state changed')
}


let state = {

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
};

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 'Likes 0',
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntiretree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntiretree(state);
};

export const subscribe = (observer) => {
    rerenderEntiretree = observer;
};

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    };

    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntiretree(state);
};

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntiretree(state);
};

export default state;