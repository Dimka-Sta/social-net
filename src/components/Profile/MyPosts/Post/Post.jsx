import React from "react";
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://media.istockphoto.com/id/1254556217/de/vektor/auto-auto-auto-logo-symbol-vektor-illustration-vorlage-moderne-sport-car-vektor-logo-symbol.jpg?s=612x612&w=0&k=20&c=JHAkNqg4fS-RT4D0k4Bx_O5AyqwLyoZRIe9ssx9GxmI=" />
            <span> {props.message} </span>
            <div>
                <span>{props.like}</span>
            </div>

        </div>
    )
}

export default Post;