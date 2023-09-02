import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator, updateNewMessageTextActionCreator } from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElements = state.messagesData.map(messages => <Message message={messages.message} />)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() );
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch( updateNewMessageBodyCreator(body) )
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
                    placeholder="Enter your message"
                    onChange={onNewMessageChange}
                    value={newMessageBody} />

                </div>

                <div>
                    <button onClick={ onSendMessageClick }> Send message </button>
                </div>

            </div>

        </div>
    )
};

export default Dialogs;