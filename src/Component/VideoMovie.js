import React,{useState, useEffect} from "react"
import './VideoAllMovieTv.css'
import {getVideoMovie} from '../Services/MovieService'
import {getVideoTv} from '../Services/TvService'
import ReactPlayer from 'react-player/youtube'
import PlayImg from '../Img/play-button-redondo.png'
import CloseImg from '../Img/close-circleBlack.png'
import ErrorAlert from '../UI/ErrorAlert'

function VideoMovie({idMovieTv, index, changeIndex, movie}){

    const [videoMovie, setVideoMovie] = useState([])
    const [videoAll, setVideoAll] = useState(false)
    const [loanding, serLoanding] = useState(true)

    useEffect(
        () => {
            serLoanding(true)
            const getVideoM = async () => {
                try{
                    if(movie){
                        setVideoMovie([])
                        const response = await getVideoMovie(idMovieTv.id)
                        if(response?.results[0]?.key){
                            setVideoMovie(response?.results[0]?.key)
                            serLoanding(false)
                        }
                    }else{
                        setVideoMovie([])
                        const response = await getVideoTv(idMovieTv.id)
                        if(response?.results[0]?.key){
                            setVideoMovie(response?.results[0]?.key)
                            serLoanding(false)
                        }
                    }
                }catch(error){
                    return <ErrorAlert/>
                }
            }
            getVideoM()
        },[idMovieTv, movie]
    )
    
    const handleClick = (e) => {
        setVideoAll(e)
    }

    const styles = {
        videoStyles:{
            zIndex:'9999999'
        }
    }

    return(
        <>
        {videoAll &&
            <div className="videoAll">
                <img src={CloseImg} alt='Button Close' onClick={() =>{handleClick(false)}} className='closeButton'></img>
                
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoMovie}`} 
                width='700px' height='450px'
                playing={true}
                style={styles.videoStyles}
                />
            </div>
        }

        {videoMovie.length !== 0 &&
            <div className="containerImgTxtVideoAll" id={loanding ? 'effec' : 'effectrue'}>
                <div className="containerImgVideoAll" onClick={() =>{handleClick(true)}}   onMouseEnter={() => {changeIndex(index)}} >
                    <img src={ idMovieTv.backdrop_path ? `https://image.tmdb.org/t/p/w500${idMovieTv.backdrop_path}` : `https://image.tmdb.org/t/p/w500${idMovieTv.poster_path}`} alt='Imagen Película' className="imgVideoBackgroun"></img>
                    <img src={PlayImg} alt='Button play' className="playButton" ></img>
                </div>
                <div className="txtVideoAll">
                    <p>{ idMovieTv.name ? idMovieTv.name : idMovieTv.title }</p>
                </div>
            </div>
        }
        </>
    )

}

export default VideoMovie
/*
            {videoMovie.length !== 0 &&
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoMovie}`} 
                width='400px' height='250px'
                />
            }

*/