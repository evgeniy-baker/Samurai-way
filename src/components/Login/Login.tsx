import React from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { Input } from "../Common/FormsControls"
import { required } from "../../utils/validators"
import { loginTC } from "../../redux/auth-reducer"
import { useDispatch, useSelector } from "react-redux"
import { RootReducerType } from "../../redux/redux-store"
import { Redirect } from "react-router-dom"
import s from "../Common/FormsControls.module.css"

type FormData = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormData>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="email" placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type="password" placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={Input} />
        Remember Me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <button>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormData>({ form: "login" })(LoginForm)

export const Login = () => {
  const isAuth = useSelector<RootReducerType, boolean>((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  const onSubmit = (formData: FormData) => {
    dispatch(loginTC(formData.email, formData.password))
  }

  if (isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
