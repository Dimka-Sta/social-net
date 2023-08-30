import { rerenderEntiretree } from "../render";


let state = {

    profilePage: {
        postsData: [
            { id: 1, massage: 'Haw are you?', likesCount: "likes 10" },
            { id: 2, massage: 'My first post!', likesCount: "Likes 20" },
        ],
        newPostText: 'kamasutra.com'
        
    },

    dialogsPage: {
        messagesData: [
            { id: 1, massage: 'Hi!' },
            { id: 2, massage: 'How are you?' },
            { id: 3, massage: 'Good and you?' },
            { id: 4, massage: 'Are you maaad??' },
        ],
        dialogsData: [
            { id: 1, name: 'Dimka' },
            { id: 2, name: 'Lizka' },
            { id: 3, name: 'Mishka' },
            { id: 4, name: 'Danka' },
        ],
    },

    sidebar : {

    },
}

export let addPost = () => {
    let newPost = {
        id: 3,
        massage: state.profilePage.newPostText,
        likesCount: 'Likes 0',
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntiretree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntiretree(state);
}

export default state;