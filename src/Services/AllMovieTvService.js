import {
	getRequestSearch
} from './privateApiServices'
const endpoint = '/multi'

export const getSearchAllMovieTv = async (search, numPag = 1) => {
	const response = await getRequestSearch(endpoint, search, numPag)
	return response.data
}