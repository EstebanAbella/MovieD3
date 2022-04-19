import React, {useEffect, useState} from "react"
import './MovieAllPAge.css'
import LayoutPublic from '../Layout/LayoutPublic'
import {getMovies} from '../Services/MovieService'
import CardMovie from '../Component/CardMovie'
import Paginations from '../UI/Paginations'
import Search from "../Component/Search"
import {getSearchMovie} from '../Services/MovieService'
import ErrorAlert from '../UI/ErrorAlert'

function MovieAllPAge(){

    const [allMovie, setAllMovie] = useState([])
    const [numPag, setNumPag] = useState(1)
    const [resultsSearch, setResultsSearch] = useState('')
    const [loanding, setLoanding] = useState(true)

    useEffect(
        () => {
            try{
                const allMovieGet = async () => {
                    setLoanding(true)
                    if(resultsSearch.length >= 3){
                        const response = await getSearchMovie(resultsSearch, numPag)
                        if(response.results){
                            setAllMovie(response)
                            setLoanding(false)
                        }
                    }

                    if(resultsSearch.length < 3){
                        const response = await getMovies(numPag)
                        if(response.results){
                            setAllMovie(response)
                            setLoanding(false)
                        }
                    }
                }
                allMovieGet()
            }catch(error){
                return <ErrorAlert/>
            }
        },[numPag, resultsSearch]
    )

    const debounceSearch = (e) => {
        setResultsSearch(e)
        setNumPag(1)
    }

    const numberPaginations = (e) => {
        setNumPag(e)
    }

    return(
        <LayoutPublic>
            <main className="movieTvAllPAge">
                <Search debounce={true} debounceSearch={debounceSearch}/>
                <div className="titleAllMovieTv">
                    <h1>All Movies</h1>
                </div>
                <section className="containerAllMovieTv">
                    {allMovie?.results?.length === 0 ?
                        <p className="title">No results found</p>
                    :
                        allMovie?.results?.map(allm => <CardMovie  data={allm} key={allm.id} loanding={loanding}/>)
                    }
                </section>
            </main>
            {allMovie.total_pages &&
                <Paginations data={allMovie?.total_pages} numberPaginations={numberPaginations}/>
            }
        </LayoutPublic>
    )
}    

export default MovieAllPAge