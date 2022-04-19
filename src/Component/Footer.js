import React from "react"
import './Footer.css'
import Facebook from '../Img/facebook.png'
import Twitter from '../Img/twitter.png'
import Instagram from '../Img/instagram.png'
import Logo from '../Img/film-reel.png'
import Linkedin from '../Img/linkedin.png'
import Mail from '../Img/mail-black.png'
import Button from 'react-bootstrap/Button'

function Footer(){
    return(
        <div className="footer">
            <div className="columnOne">
                <div className="textFooter">
                    <div className="LogoContainer">
                        <p className="titleLogo">Movie D3</p> 
                        <img src={Logo} alt='Imagen Logo' className="imgLogo"></img>
                    </div>
                    <Button variant="outline-light" type="submit" className="btnFooter">Hi! Cinema lovers</Button> 
                </div>

                <div className="RedesSocialesFooter">
                    <div className="redesFooter">
                        <a href='https://facebook.com' target="blank"><img src={Facebook} alt='Img Facebook'></img></a>
                        <p>/cinemaMovieD3</p>
                    </div>
                    <div className="redesFooter">
                    <a href='https://twitter.com' target="blank"><img src={Twitter} alt='Img Twitter'></img></a>
                        <p>/MovieD3Cinema</p>
                    </div>
                    <div className="redesFooter">
                    <a href='https://www.instagram.com' target="blank"><img src={Instagram} alt='Img Instagram'></img></a>
                        <p>/MovieD3Cinema</p>
                    </div>
                </div>

                <div className="personalFooter">
                    <p className="txtPersonalFooter">Diseñado y desarrollado por Esteban Abella</p>
                    <h2>Contacto:</h2>
                    <div className="redesFooter">
                        <a href='https://www.linkedin.com/in/esteban-gabriel-abella-88a537208/' target="blank"><img src={Linkedin} alt='Img Linkedin'></img></a>
                        <p>/Linkedin</p>
                    </div>
                    <div className="redesFooter">
                        <a href='https://outlook.live.com/owa/' target="blank"><img src={Mail} alt='Img Mail'></img></a>
                        <p>/esteban.abella@hotmail.com</p>
                    </div>
                </div>
            </div>

            <div className="coment">
                <hr></hr>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hurricane" viewBox="0 0 16 16">
                    <path d="M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6.001-4.9zM10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                </svg> Times Of Change</p>
            </div>

            <div className='rights'>
                    <p>Copyright (©)2022 CinemaD3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer