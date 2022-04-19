import {
	getRequest,
	deleteRequest,
	putRequest,
	postRequest,
	getRequestSearch
} from './privateApiServices'
const endpoint = '/movie'
const endpointAll = '/discover'
const endpointVideo = '/videos'

export const getMovies = async (numPag, id = null) => {
	const response = await getRequest(endpoint, numPag, id, endpointAll)
	return response.data
}

export const getMovie = async (id, numPag = null) => {
	const response = await getRequest(endpoint, numPag, id)
	return response.data
}

export const postMovie = async (movie) => {
	const response = await postRequest(endpoint, movie)
	return response.data
}

export const putMovie = async (id, movie) => {
	const response = await putRequest(endpoint, id, movie)
	return response.data
}

export const deleteMovie = async (id) => {
	const response = await deleteRequest(endpoint, id)
	return response.data
}

export const getSearchMovie = async (search, numPag = 1) => {
	const response = await getRequestSearch(endpoint, search, numPag)
	return response.data
}

export const getVideoMovie = async (id, numPag = null, endpointAll = null) => {
	const response = await getRequest(endpoint, numPag, id, endpointAll, endpointVideo)
	return response.data
}