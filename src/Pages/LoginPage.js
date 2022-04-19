import React from "react";
import LoginForm from "../Component/LoginForm";
import LoginImg from "../Component/LoginImg";
import './LoginPage.css'

function LoginPage () {
    return(
        <div className="loginPage">
            <LoginForm/>
            <LoginImg />
        </div>
    )
}

export default LoginPage