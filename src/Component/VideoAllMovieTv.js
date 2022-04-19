import React, { useState } from "react"
import './VideoAllMovieTv.css'
import VideoMovie from "./VideoMovie"
//Redux
import {useSelector} from 'react-redux'
//FIN Redux

function VideoAllMovieTv(){

    const dataMovies = useSelector(store=> store.movie.movie)
    const dataTv = useSelector(store=> store.tv.tv)
    const [indexVideo, setIndexVideo] = useState(1)
    const [selectMovieTv, setSelectMovieTv] = useState(true)

    const styles = {
        sectionVideoAll:{
            backgroundImage: `linear-gradient(to right, rgba(20,75,126,.6)0%, rgba(20,75,126,.2) 100%),url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${selectMovieTv ? dataMovies[indexVideo]?.backdrop_path : dataTv[indexVideo]?.backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover', 
            transition: 'all 0.5s',
        }
    }

    const changeIndex = (e) => {
        setIndexVideo(e)
    }


    return(
        <>
            <div className="titleVideo">
                <h1>Trailers</h1>
            </div>
            <section className="videoAllMovieTv" style={styles.sectionVideoAll}>
                <div className="btnSelectMovieTv">
                    <p onClick={()=>{setSelectMovieTv(true)}} >Movie</p>
                    <p onClick={()=>{setSelectMovieTv(false)}} >Tv</p>
                </div>
                <div className="containerSliderVideo">
                    {selectMovieTv ?
                    dataMovies.map(( i, index ) => {return (<VideoMovie idMovieTv={i} key={index} index={index}  changeIndex={changeIndex} movie={true} /> )})
                    :
                    dataTv.map(( i, index ) => {return (<VideoMovie idMovieTv={i} key={index} index={index}  changeIndex={changeIndex} movie={false}/> )})
                    }
                </div>

            </section>
        </>
    )
}

export default VideoAllMovieTv