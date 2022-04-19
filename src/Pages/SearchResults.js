import React,{useEffect, useState} from "react"
import './SearchResults.css'
import {getSearchAllMovieTv} from '../Services/AllMovieTvService'
import CardMovie from "../Component/CardMovie"
import { useParams } from "react-router-dom"
import Search from "../Component/Search"
import LayoutPublic from '../Layout/LayoutPublic'
import Paginations from '../UI/Paginations'
import ErrorAlert from '../UI/ErrorAlert'

function SearchResults(){

    const [dataSearch, setDataSearch] = useState([])
    let { search } = useParams();
    const [resultsSearch, setResultsSearch] = useState(search)
    const [numPag, setNumPag] = useState(1)
    const [loanding, setLoanding] = useState(true)

    useEffect(
        () => {
            setLoanding(true)
            const getSearchResults = async () => {
                try{
                    const response = await getSearchAllMovieTv(resultsSearch, numPag)
                    if(response.results){
                        setDataSearch(response)
                        setLoanding(false)
                    }
                }catch(error){
                    return <ErrorAlert/>
                }
            }
            getSearchResults()
        },[resultsSearch, numPag]
    )

    const debounceSearch = (e) => {
        setResultsSearch(e)
        window.history.replaceState({}, document.title, `/search-results/${e}`);
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
                    <h1>Results</h1>
                </div>
                <section className="containerAllMovieTv">
                    {dataSearch?.results?.length === 0  ?
                        <p className="title">No results found</p>
                        :
                        dataSearch?.results?.map(ds => <CardMovie data={ds} key={ds.id} loanding={loanding} />)
                    }
                </section>
                {dataSearch?.total_pages !== 0  &&
                    <Paginations data={dataSearch?.total_pages} numberPaginations={numberPaginations}/>
                }
            </main>
        </LayoutPublic>
    )
}

export default SearchResults