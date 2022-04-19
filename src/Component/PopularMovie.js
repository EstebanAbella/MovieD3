import React, { useEffect, useState } from "react"
import './PopularMovie.css'
import { getMovies } from '../Services/MovieService'
import SliderMovies from "../UI/SliderMovies"
import { store } from '../Redux/app/store'
import { getMovieActions } from '../Redux/actions/MovieActions'
import ErrorAlert from '../UI/ErrorAlert'

function PopularMovie(){

    const [movieData, setMovieData] = useState([])
    const [loanding, setLoanding] = useState(true)
    const numPagination = 1

    useEffect(
        () => {
            const movieGet = async () => {
                try{
                    const response = await getMovies(numPagination)
                    if(response.results){
                        store.dispatch(getMovieActions(response.results))
                        setMovieData(store.getState().movie.movie)
                        setLoanding(false)
                    }
                }catch(error){
                    return <ErrorAlert/>
                }
            }
            movieGet()
        },[]
    )

    return(
        <section className="popularMovie">
            <div className="titleMovie">
                <h1>Popular movies</h1>
            </div>
            <section className="containerCardMovie">
                <SliderMovies data={movieData} loanding={loanding}/>
            </section>
        </section>
    )
}

export default PopularMovie