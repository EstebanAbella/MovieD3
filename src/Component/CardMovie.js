import React from "react"
import './CardMovie.css'
import { Link } from "react-router-dom"
import BtnAddFavourites from "../UI/Btns/BtnAddFavourites"
import BtnRemoveFavourites from "../UI/Btns/BtnRemoveFavourites"
import LazyLoad from '../UI/LazyLoad'
import Skeleton from '../UI/Skeleton/Skeleton'

function CardMovie({data, favourites = false, loanding}){

    const sizeSkeleton = {
        skeletonOne: {width: '240px', height: '345px', radius: '10px' },
        skeletonTwo: { width: '210px', height: '20px', radius: '10px' },
        skeletonThree: { width: '120px', height: '20px', radius: '10px' },
    }
    const containerSkeleton = {
        skeletonOne: { width: '240px', height: '350px',justify: 'center', align:'center' },
        skeletonTwo: { width: '240px', height: '25px',justify: 'flex-start', align:'left' },
    }


    if (loanding) {
        return (
            <div className="cardMovie">
                <Skeleton skeletonSize={sizeSkeleton.skeletonOne} skeletonContainer={containerSkeleton.skeletonOne}/>
                <Skeleton skeletonSize={sizeSkeleton.skeletonTwo} skeletonContainer={containerSkeleton.skeletonTwo}/>
                <Skeleton skeletonSize={sizeSkeleton.skeletonThree} skeletonContainer={containerSkeleton.skeletonTwo}/>
            </div>
    )}
    return(
        <div className="cardMovie">
            <div className="imgCardMovie">
                <LazyLoad src={ data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : `https://image.tmdb.org/t/p/w500${data.backdrop_path}`} altText={'Imagen Película'} classText={'imgCard'}/>

                
                <div className="voteCardMovie">
                    <p>{data.vote_average}<span> %</span></p>
                </div>

                {!favourites ?
                    <div className="btnFavouritesCard">
                        <BtnAddFavourites data={data} />
                    </div>
                    :
                    <div className="btnFavouritesCard">
                        <BtnRemoveFavourites data={data.id} />
                    </div>
                }
            </div>

            <div className="textCardMovie">
                <Link to={ data.name ? `/view-selected/tv/${data.id}` : `/view-selected/movie/${data.id}`}  className="titleCardMovie">{ data.name ? data.name : data.title}</Link>
                <p>{data.first_air_date ? data.first_air_date : data.release_date}</p>
            </div>
        </div>
    )
}

export default CardMovie