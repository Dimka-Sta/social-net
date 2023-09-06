const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postsData: [
        { id: 1, message: 'How are you?', likesCount: "likes 10" },
        { id: 2, message: 'My first post!', likesCount: "Likes 20" },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:

            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, { id: 3, message: state.newPostText, likesCount: 'Likes 0', }]
            }

        case UPDATE_NEW_POST_TEXT: 
            return {
            ...state,
            newPostText: action.newText,
            }
        default:
            return state;

    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
};

export default profileReducer;