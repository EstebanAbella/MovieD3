import React from "react"
import './HomePage.css'
import LayoutPublic from '../Layout/LayoutPublic'
import PopularTv from "../Component/PopularTv"
import PopularMovie from "../Component/PopularMovie"
import Search from "../Component/Search"
import VideoAllMovieTv from "../Component/VideoAllMovieTv"


function HomePage(){

    return(
        <LayoutPublic>
            <main className="homePage">
                <Search />
                <PopularMovie/>
                <PopularTv />
                <VideoAllMovieTv />
            </main>
        </LayoutPublic>
    )
}

export default HomePage