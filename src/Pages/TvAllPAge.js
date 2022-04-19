import React, {useEffect, useState} from "react"
import './MovieAllPAge.css'
import LayoutPublic from '../Layout/LayoutPublic'
import {getTvs} from '../Services/TvService'
import CardMovie from '../Component/CardMovie'
import Paginations from '../UI/Paginations'
import Search from "../Component/Search"
import {getSearchTv} from '../Services/TvService'
import ErrorAlert from '../UI/ErrorAlert'

function TvAllPAge(){

    const [allTv, setAllTv] = useState([])
    const [numPag, setNumPag] = useState(1)
    const [resultsSearch, setResultsSearch] = useState('')
    const [loanding, setLoanding] = useState(true)

    useEffect(
        () => {
            try{
                const allTvGet = async () => {
                    setLoanding(true)
                    if(resultsSearch.length >= 3){
                        const response = await getSearchTv(resultsSearch, numPag)
                        if(response.results){
                            setAllTv(response)
                            setLoanding(false)
                        }
                    }
                    if(resultsSearch.length < 3){
                        const response = await getTvs(numPag)
                        if(response.results){
                            setAllTv(response)
                            setLoanding(false)
                        } 
                    }
                }
                allTvGet()
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
                    <h1>All Tv</h1>
                </div>
                <section className="containerAllMovieTv">
                    {allTv?.results?.length === 0 ?
                        <p className="title">No results found</p>
                        :
                        allTv?.results?.map(allt => <CardMovie  data={allt} key={allt.id} loanding={loanding}/>)
                    }
                </section>
            </main>
            {allTv.total_pages &&
                <Paginations data={allTv?.total_pages} numberPaginations={numberPaginations}/>
            }
        </LayoutPublic>
    )
}    

export default TvAllPAge