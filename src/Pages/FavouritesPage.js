import React, { useEffect, useState } from "react"
import './FavouritesPage.css'
import LayoutPublic from '../Layout/LayoutPublic'
import CardMovie from '../Component/CardMovie'
import ImgFavourites from '../Img/popcorn-anime-color.png'
//Redux
import {useSelector} from 'react-redux'
//FIN Redux

function FavouritesPage(){

    const favouritesData = useSelector(store=> store.favourites.favourites)
    const [msjFavourites, setMsjFavourites] = useState(false)


    useEffect(
        () =>{
            if(Object.keys(favouritesData).length === 0 ){
                setMsjFavourites(true)
            }
        },[favouritesData]
    )

    return(
        <LayoutPublic>
            <main className="favouritesPage">
                <div className="titleAllMovieTv">
                    <h1>Your favourites</h1>
                </div>
                <section className="containerAllMovieTv">
                    {!msjFavourites ? 
                        favouritesData.map(f => <CardMovie  data={f} key={f.id} favourites={true} />)
                    : 
                    <>
                        <p className="msjFavourites">You dont have favourites!</p>
                        <img src={ImgFavourites} alt='Imagen favourites' className="imgFavourites"></img>
                    </>
                    }
                </section>
            </main>
        </LayoutPublic>
    )
}

export default FavouritesPage