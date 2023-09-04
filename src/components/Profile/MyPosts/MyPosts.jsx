import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";




const MyPosts = (props) => {


    let postsElements =
        props.postsData.map(messages => <Post message={messages.message} likesCount={messages.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator() ); 
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch( action );
    };


    return (
        <div className={classes.postsBlock}>
            <h3>Posts</h3>

            <div>
                <div>
                    <textarea
                        placeholder="Enter new post"
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}> Add post </button>
                </div>

            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>


        </div>
    )
};

export default MyPosts;