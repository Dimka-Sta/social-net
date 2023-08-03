import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

return (
<div className={classes.dialog + ' ' + classes.active}>
    <NavLink to={path} > {props.name} </NavLink>
</div>
)
}

const Messages = (props) => {

    return (
        <div className={classes.message}> {props.message}
        </div>
    )
}



const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name='Dimka' id='1' />
                <DialogItem name='Lizka' id='2' />
                <DialogItem name='Mishka' id='3' />
                <DialogItem name='Daniel' id='4' />

            </div>

            <div>
                <div className={classes.messages}>
                    <Messages message="Hi!" />
                    <Messages message="How are you?" />
                    <Messages message="Good, and you?" />
                </div>
            </div>

        </div>
    )
}

export default Dialogs;