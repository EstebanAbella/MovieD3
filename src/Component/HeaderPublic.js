import React,{ useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import './HeaderPublic.css'
import Logo from '../Img/film-reel.png'
import Loupe from '../Img/loupe.png'
import { useHistory } from 'react-router-dom'
import InputSearch from './InputSearch'

function HeaderPublic(){

    const [btnResponsive, setBtnResponsive] = useState('')
    const history = useHistory()
    const [inputH, setInputH] = useState(false)

    /* Determinar altura elemento */
	const refCom = useRef(null)
	const [height, setHeight] = useState()
	const [scrollY, setScrollY] = useState(0)
	const [stopScroll, setStopScroll] = useState(true)
	/* Fin determinar altura elemento */

    /* Determinar altura elemento */
	function logit() {
		setScrollY(window.pageYOffset)
	}

	useEffect(() => {
		//if (stopScroll === true) {
			watchScroll()

			function watchScroll() {
				window.addEventListener('scroll', logit)
			}
			setHeight(refCom.current?.clientHeight)

			mostrarScroll()

			return () => {
				window.removeEventListener('scroll', logit)
			}
		//}
	}, [scrollY])

	const mostrarScroll = () => {
		if (scrollY > height) {
			setStopScroll(false)
		}else{
            setStopScroll(true)
        }
	}
	/* Fin determinar altura elemento */

    const handleClickBtn = () => {
        if(btnResponsive === ''){
            setBtnResponsive('show')
        }else{
            setBtnResponsive('')
        }
    }

    const CloseSesion = () =>{
        localStorage.removeItem('token')
        history.push('/login')
    }

    const handeClick = () => {
        if(inputH){
            setInputH(false)
        }else{
            setInputH(true) 
        }
    }

    return(
        <>

        <header ref={refCom} className={stopScroll ? 'header' : 'headerFixed'}>
            <div className={'LogoContainer'}>
                <p className="titleLogo">Movie D3</p> 
                <img src={Logo} alt='Img Logo' className="imgLogo"></img>
            </div>

            <nav id="navegador" className={btnResponsive}>
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movie-all">Movie</Link></li>
                    <li><Link to="/tv-all">Tv</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>

                    <li className="btnClose" onClick={CloseSesion}><Link to="/login">Exit</Link></li>
                </ul>
            </nav>

            <div className="searchHeader">
                <div className={inputH ? 'inputHeaderTrue' : 'inputHeader'}>
                    <InputSearch debounce={false} header={true}/>
                </div>
                <img src={Loupe} alt='Img Loupe' className="imgLoupe" id={inputH ? 'loupeHeaderTrue' : 'loupeHeaderFalse'} onClick={handeClick}></img>
            </div>

            <div className="menu-btn">
                <i onClick ={handleClickBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </i>
            </div>
        </header>
        </>
    )
}

export default HeaderPublic