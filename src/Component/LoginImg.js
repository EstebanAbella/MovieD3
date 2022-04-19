import React from "react"
import ImgLogin from '../Img/imgLogin.jpg'
import './LoginImg.css'

function LoginImg(){
    return(
        <div className="loginImg">
            <img src={ImgLogin} alt='Imagen Login'></img>
        </div>
    )
}

export default LoginImg