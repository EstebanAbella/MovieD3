import {
	getRequest,
	deleteRequest,
	putRequest,
	postRequest,
	getRequestSearch
} from './privateApiServices'
const endpoint = '/tv'
const endpointAll = '/discover'
const endpointVideo = '/videos'

export const getTvs = async (numPag, id = null) => {
	const response = await getRequest(endpoint, numPag, id, endpointAll)
	return response.data
}

export const getTv = async (id, numPag = null) => {
	const response = await getRequest(endpoint, numPag, id)
	return response.data
}

export const postTv = async (movie) => {
	const response = await postRequest(endpoint, movie)
	return response.data
}

export const putTv = async (id, movie) => {
	const response = await putRequest(endpoint, id, movie)
	return response.data
}

export const deleteTv = async (id) => {
	const response = await deleteRequest(endpoint, id)
	return response.data
}

export const getSearchTv = async (search, numPag = 1) => {
	const response = await getRequestSearch(endpoint, search, numPag)
	return response.data
}

export const getVideoTv = async (id, numPag = null, endpointAll = null) => {
	const response = await getRequest(endpoint, numPag, id, endpointAll, endpointVideo)
	return response.data
}