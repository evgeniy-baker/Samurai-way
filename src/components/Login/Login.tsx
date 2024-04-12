import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {loginAPI} from "../../api/api";
import {Redirect} from "react-router-dom";

type FormData = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormData>) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={'Login'} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field type="password" placeholder={'Password'} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type="checkbox" name={'rememberMe'} component={'input'}/>Remember Me
        </div>
        <button>Login</button>
    </form>
};



const LoginReduxForm = reduxForm<FormData>({form: 'login'})(LoginForm)



export const Login = () => {
const onSubmit = (formData: FormData) => {
    console.log(formData)
    loginAPI({email: formData.login, password: formData.password})
        .then((res) => {
            if (res.data.resultCode === 0) {
                <Redirect to={'/profile'} />
            }
        })
}

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};