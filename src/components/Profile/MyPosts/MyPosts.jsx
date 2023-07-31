import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            posts

            <div>
                <textarea>Hi! </textarea>
                <button> Add</button>
            </div>

            <Post message ="Haw are you?" like="10 like"/>
            <Post message ="My first post!"like="20 like"/>

        </div>
    )
}

export default MyPosts;