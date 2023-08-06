import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post"


const MyPosts = (props) => {

   
    let postsElements = 
    props.postsData.map( messages => <Post message={messages.massage} likesCount={messages.likesCount}/> )
  
    

    return (
        <div className={classes.postsBlock}>
            <h3>Posts</h3>

            <div>
                <div>
                <textarea>Hi! </textarea>
                </div>
                <div>
                <button> Add</button>
                </div>
                
            </div>

            <div className={classes.posts}>
                { postsElements }
            </div>
            

        </div>
    )
}

export default MyPosts;