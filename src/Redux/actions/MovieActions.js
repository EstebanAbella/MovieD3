import {
	MOVIES_GET,
	MOVIES_POST,
	MOVIES_DELETE,
	MOVIES_PUT,
} from '../types'

export const getMovieActions = (movie) => ({
	type: MOVIES_GET,
	payload: movie,
})

export const postMovieActions = (movie) => ({
	type: MOVIES_POST,
	payload: movie,
})

export const putMovieActions = (movie) => ({
	type: MOVIES_PUT,
	payload: movie,
})

export const deleteMovieActions = (id) => ({
	type: MOVIES_DELETE,
	payload: id,
})
