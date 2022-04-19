import React,{useState, useEffect} from "react"
import './BtnAddFavourites.css'
import ImgHeart from '../../Img/heart-black.png'
import Swal from 'sweetalert2'
import ImgBtn from '../../Img/popcorn-anime-color.png'
//Redux
import { store } from '../../Redux/app/store'
import { postFavouritesActions } from '../../Redux/actions/FavouritesActions'
//FIN Redux

function BtnAddFavourites({data}){

    const [favAdd, setFavAdd] = useState(false)


    useEffect(
        () => {
            const fav = JSON.parse(localStorage.getItem('favourites'))
            if(Object.keys(fav).length !== 0){
                const resultFav = fav.filter(f => f.id === data.id)
                if(Object.keys(resultFav).length !== 0){
                    setFavAdd(true)
                }else{
                    setFavAdd(false)
                }
            }
        },[data.id]
    )


    const handleClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Add favourites',
            imageUrl: ImgBtn,
            imageHeight: 150,
            imageAlt: 'image',
            timer: 1500,
          })
        store.dispatch(postFavouritesActions(data))
        setFavAdd(true)
    }

    return(
        <>
        {favAdd === false ?
        <div className="btnAddFavourites" onClick={handleClick}>
            <img src={ImgHeart} alt='Imagen Favourites'></img>
        </div>
        :
        <div className="btnAddFavouritesPress">
            <img src={ImgHeart} alt='Imagen Favourites'></img>
        </div>
        }
        </>
    )
}

export default BtnAddFavourites