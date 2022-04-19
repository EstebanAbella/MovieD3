import {
	FAVOURITES_GET,
	FAVOURITES_POST,
	FAVOURITES_DELETE,
	FAVOURITES_PUT,
} from '../types'

export const getFavouritesActions = (favourites) => ({
    type: 	FAVOURITES_GET,
	payload: favourites,
})

export const postFavouritesActions = (favourites) => ({
    type: FAVOURITES_POST,
    payload: favourites,
})

export const putFavouritesActions = (favourites) => ({
    type: FAVOURITES_PUT,
    payload: favourites,
})

export const deleteFavouritesActions = (id) => ({
    type: FAVOURITES_DELETE,
    payload: id,
})