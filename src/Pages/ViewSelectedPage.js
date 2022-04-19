import React, {useEffect, useState} from "react"
import './ViewSelectedPage.css'
import LayoutPublic from '../Layout/LayoutPublic'
import { useParams } from "react-router-dom"
import {getMovie} from '../Services/MovieService'
import {getTv} from '../Services/TvService'
import Skeleton from '../UI/Skeleton/Skeleton'
import ErrorAlert from '../UI/ErrorAlert'

function ViewSelectedPage(){

    const [data, setData] = useState({})
    let { id } = useParams()
    let { view } = useParams()
    const [loanding, setLoanding] = useState(true)

    const sizeSkeleton = {
        skeletonOne: {width: '90%', height: '500px', radius: '10px' },
        skeletonTwo: { width: '70%', height: '30px', radius: '10px' },
        skeletonThree: { width: '90%', height: '170px', radius: '10px' },
        skeletonFour: { width: '80%', height: '70px', radius: '10px' },
    }
    const containerSkeleton = {
        skeletonOne: { width: '100%', height: '500px',justify: 'center', align:'center' },
        skeletonTwo: { width: '100%', height: '40px',justify: 'flex-start', align:'left' },
        skeletonThree: { width: '100%', height: '180px',justify: 'flex-start', align:'left' },
        skeletonFour: { width: '100%', height: '80px',justify: 'flex-start', align:'left' },
    }

    useEffect(
        () => {
            try{
                const getSelected = async () =>{
                    setLoanding(true)
                    if(view === 'tv'){
                        const response = await getTv(id)
                        if(response){
                            setData(response)
                            setLoanding(false)
                        }
                    }else{
                        const response = await getMovie(id)
                        if(response){
                            setData(response)
                            setLoanding(false)
                        }
                    }
                }
                
                getSelected()
            }catch(error){
                return <ErrorAlert/>
            }

        },[id, view]
    )


    return(
        <LayoutPublic>
            <main className="viewSelectedPage" >

                <img  src={`https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${data.backdrop_path ? data.backdrop_path : data?.images?.posters[1]?.file_path || data.poster_path }`} alt='Imagen Película' className="imgBackgroundSelectedPage"></img>

                <div className="imgSelectedPage">
                    {loanding ?
                        <Skeleton skeletonSize={sizeSkeleton.skeletonOne} skeletonContainer={containerSkeleton.skeletonOne}/>
                    :
                        <img  src={`https://image.tmdb.org/t/p/w500${data?.belongs_to_collection?.poster_path ? data?.belongs_to_collection?.poster_path : data.poster_path || data?.images?.posters[0]?.file_path}`} alt='Imagen Película'
                        className='imgP'></img>
                    }
                </div>

                <div className="txtSelectedPage">
                    {loanding ?
                        <Skeleton skeletonSize={sizeSkeleton.skeletonTwo} skeletonContainer={containerSkeleton.skeletonTwo}/>
                    :
                        <>
                            <p className="titleSelectedPage">{data.title ? data.title : data.name} - <span>({data.release_date ? data.release_date : data.last_air_date})</span></p>
                    
                            <div className="genresSelectedPage">
                                {data?.genres?.map((g,index) => <p key={index}>{g.name} -</p>)}
                            </div>
                        </>
                    }

                    {loanding ?
                        <Skeleton skeletonSize={sizeSkeleton.skeletonThree} skeletonContainer={containerSkeleton.skeletonThree}/>
                    :
                        <>
                            <p className="overViewSelectedPage">{data.overview}</p>
                        
                            {data.runtime ?
                                <p>Duración: {data.runtime}min</p>
                            :
                                <p>Duración de episodio: {data.episode_run_time}min</p>
                            }
                        </>
                    }

                    {loanding ?
                        <Skeleton skeletonSize={sizeSkeleton.skeletonFour} skeletonContainer={containerSkeleton.skeletonFour}/>
                    :
                        <>
                            <div className="productionContainerSelectedPage">
                                {data?.production_companies?.map((g, index) => 
                                    <div className="productionSelectedPage" key={index}>
                                        <p>{g.name}</p>
                                        <img src={`https://image.tmdb.org/t/p/w500${g.logo_path}`} alt='Imagen Producción'></img>
                                    </div>
                                )}
                            </div>
                        </>
                    }
                </div>
            </main>
        </LayoutPublic>
    )
}

export default ViewSelectedPage