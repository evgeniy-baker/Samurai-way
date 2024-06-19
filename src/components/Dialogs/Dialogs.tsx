import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onMessageChange = () => {
        if (newMessageElement.current) {
            const text = newMessageElement.current.value
            props.updateNewMessageText(text)
        }
    }

    const addMessageHandler = () => {
        // props.addMessage()
    }

    const addNewMessage = (values: DialogsType) => {
        props.addMessage(values.newMessageBody)
    }

    // if (!props.isAuth) return <Redirect to={"/Login"}/>

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
                        <textarea ref={newMessageElement}
                                  value={props.dialogsPage.newMessageText}
                                  onChange={onMessageChange}/>
                    </div>

                    <div>
                        <button onClick={addMessageHandler}>Send</button>
                    </div>
                </div>

            </div>

            <div className={s.textareaBlock}>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>
    );
};


type DialogsType = {
    newMessageBody: string
}
const DialogsForm = (props: InjectedFormProps<DialogsType>) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'}
                   name={'newMessageBody'}
                   placeholder={'Enter message text'}/>
        </div>

        <div>
            <button>Send</button>
        </div>
    </form>

}
const DialogsReduxForm = reduxForm<DialogsType>({form: 'DialogsAddMessageText'})(DialogsForm)