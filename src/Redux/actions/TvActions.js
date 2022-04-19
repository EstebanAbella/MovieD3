import {
	TV_GET,
	TV_POST,
	TV_DELETE,
	TV_PUT,
} from '../types'

export const getTvActions = (tv) => ({
	type: TV_GET,
	payload: tv,
})

export const postTvActions = (tv) => ({
	type: TV_POST,
	payload: tv,
})

export const putTvActions = (tv) => ({
	type: TV_PUT,
	payload: tv,
})

export const deleteTvActions = (id) => ({
	type: TV_DELETE,
	payload: id,
})