import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../redux/state";

type DialogsType = {
    dialogsPage: DialogPageType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onMessageChange = () => {
        if (newMessageElement.current) {
            const text = newMessageElement.current.value
            props.updateNewMessageText(text)
        }
    }

    const addMessageHandler = () => {
        props.addMessage()
    }

    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>

                <div className={s.textareaBlock}>
                    <div>
                        <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText}
                                  onChange={onMessageChange}/>
                    </div>

                    <div>
                        <button onClick={addMessageHandler}>Add post</button>
                    </div>
                </div>

            </div>
        </div>
    );
};