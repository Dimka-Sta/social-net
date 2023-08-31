import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElements = props.dialogsPage.messagesData.map(messages => <Message message={messages.message} />)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch( {type:'ADD-MESSAGE'} );
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch( {type:'UPDATE-NEW-MESSAGE-TEXT', newText: text} );
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogElements}

            </div>

            <div>
                <div className={classes.messages}>

                    {messageElements}

                </div>
                <div>

                    <textarea 
                    onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.newMessageText} />

                </div>

                <div>
                    <button onClick={addMessage}> Add message </button>
                </div>

            </div>

        </div>
    )
};

export default Dialogs;