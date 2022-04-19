import React, { useEffect, useState } from "react"
import './PopularTv.css'
import { getTvs } from '../Services/TvService'
import SliderMovies from "../UI/SliderMovies"
import { store } from '../Redux/app/store'
import { getTvActions } from '../Redux/actions/TvActions'
import ErrorAlert from '../UI/ErrorAlert'

function PopularTv(){

    const [tvData, setTvData] = useState([])
    const [loanding, setLoanding] = useState(true)
    const numPagination = 1

    useEffect(
        () => {
            const tvGet = async () =>{
                try{
                    const response = await getTvs(numPagination)
                    if(response.results){
                        store.dispatch(getTvActions(response.results))
                        setTvData(store.getState().tv.tv)
                        setLoanding(false)
                    }
                }catch(error){
                    return <ErrorAlert/>
                }
            }
            tvGet()
        },[]
    )


    return(
        <section className="popularTv">
                <div className="titleTv">
                    <h1>Popular Tv</h1>
                </div>
                <section className="containerCardTv">
                    <SliderMovies data={tvData} loanding={loanding} />
                </section>
        </section>
    )
}

export default PopularTv