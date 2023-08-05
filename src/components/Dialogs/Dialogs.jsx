import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let dialogsData = [
    { id: 1, name: 'Dimka' },
    { id: 2, name: 'Lizka' },
    { id: 3, name: 'Mishka' },
    { id: 4, name: 'Danka' },
]

let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

let messagesData = [
    { id: 1, massage: 'Hi!' },
    { id: 2, massage: 'How are you?' },
    { id: 3, massage: 'Good and you?' },
    { id: 4, massage: 'Are you maaad??' },
]

let messageElements = messagesData.map(messages => <Message message={messages.massage} />)

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogElements}

            </div>

            <div>
                <div className={classes.messages}>

                    {messageElements}

                </div>
            </div>

        </div>
    )
}

export default Dialogs;