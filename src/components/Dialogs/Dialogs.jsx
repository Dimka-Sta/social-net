import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElements = props.state.messagesData.map(messages => <Message message={messages.massage} />)

    let newMassageElement = React.createRef()

    let addMessage = () => {
        let text = newMassageElement.current.value
        alert(text)
    }

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

                    <textarea ref={newMassageElement} ></textarea>

                </div>

                <div>
                    <button onClick={addMessage}> Add message </button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;