import React,{useEffect, useState} from "react"
import './Seach.css'
import {getMovies} from '../Services/MovieService'
import InputSearch from "./InputSearch"
import ErrorAlert from '../UI/ErrorAlert'

function Search({debounce = false, debounceSearch}){

    const [imgBackground, setImgBackground] = useState()
    const [loanding, setLoanding] = useState(true)

    useEffect(
        () => {
            const getImg = async () => {
                try{
                    const response = await getMovies(1)
                    if(response.results){
                        setImgBackground(response.results[random()])
                        setLoanding(false)
                    }
                }catch(error){
                    return <ErrorAlert/>
                }
            }
            getImg()
        },[]
    )


    function random() {
        return Math.floor((Math.random() * (15 - 1 + 1)) + 1);
    }

    const styles = {
        imgSearch:{
            backgroundImage: `linear-gradient(to right, rgba(20,75,126,.8)0%, rgba(3,37,65,.1) 100%),url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${imgBackground?.backdrop_path})`,
            backgroundPosition: 'top-center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        },
        Search:{
            backgroundImage: `linear-gradient(to right, rgba(20,75,126,.8)0%, rgba(3,37,65,.1) 100%)`,
            backgroundPosition: 'top-center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
    }


    return(
        <div className="search" style={ !loanding ? styles.imgSearch : styles.Search}>
            <p><span>Welcome.</span><br/>Millions of movies, TV shows and people to discover. Explore now.</p>
            <InputSearch debounce={debounce} debounceSearch={debounceSearch}/>
        </div>
    )
}

export default Search