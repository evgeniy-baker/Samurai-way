import React from "react"
import s from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem"
import { Message } from "./Message/Message"
import { DialogsPropsType } from "./DialogsContainer"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { Textarea } from "../Common/FormsControls"
import { maxLengthCreator, required } from "../../utils/validators"

export const Dialogs = (props: DialogsPropsType) => {
  const state = props.dialogsPage

  let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />)
  let messagesElements = state.messages.map((m) => <Message key={m.id} id={m.id} message={m.message} />)

  const addNewMessage = (values: DialogsType) => {
    props.addMessage(values.newMessageBody)
  }

  // if (!props.isAuth) return <Redirect to={"/Login"}/>

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>

        <div className={s.messages}>{messagesElements}</div>

        <div className={s.textareaBlock}>
          <DialogsReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

type DialogsType = {
  newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const DialogsForm = (props: InjectedFormProps<DialogsType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageBody"}
          placeholder={"Enter message text"}
          validate={[required, maxLength50]}
        />
      </div>

      <div>
        <button>Send</button>
      </div>
    </form>
  )
}
const DialogsReduxForm = reduxForm<DialogsType>({
  form: "DialogsAddMessageText",
})(DialogsForm)
