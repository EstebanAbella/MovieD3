import React from "react"
import './BtnRemoveFavourites.css'
import ImgDelete from '../../Img/delete.png'
import Swal from 'sweetalert2'
//Redux
import { store } from '../../Redux/app/store'
import { deleteFavouritesActions } from '../../Redux/actions/FavouritesActions'
//FIN Redux

function BtnRemoveFavourites({data}){

    const handleClick = () => {
        Swal.fire({
            title: 'do you want to remove it?',
            icon: 'warning',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Remove',
            denyButtonText: `Don't remove`,
          }).then((result) => {
            if (result.isConfirmed) {
                store.dispatch(deleteFavouritesActions(data))
                Swal.fire('Remove!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not remove', '', 'info')
            }
          })
    }

    return(
        <div className="btnRemoveFavourites" onClick={handleClick}>
            <img src={ImgDelete} alt='Boton eliminar'></img>
        </div>
    )
}

export default BtnRemoveFavourites