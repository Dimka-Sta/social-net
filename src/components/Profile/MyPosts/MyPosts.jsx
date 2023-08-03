import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
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
            <Post message ="Haw are you?" like="10 like"/>
            <Post message ="My first post!"like="20 like"/>
            </div>
            

        </div>
    )
}

export default MyPosts;