import axios from 'axios'
import { baseURL, apiKey } from './Api'


const getToken = () => {
	const token =
        JSON.parse(localStorage.getItem('token')) === 'undefined'
        ? ''
        : JSON.parse(localStorage.getItem('token')) || ''
	return {
		Authorization: `Bearer ${token}`,
	}
}

const config = {
	headers: {
		// Group: 144,
		'Content-Type': 'application/json',
	},
}


export const getRequest = async ( endpoint, numPag = null, id = null, endpointAll = null, endpointVideo = null ) =>{
    try{
        const response = await axios({
            method: 'GET',
            url: !id ? 
                `${baseURL}${endpointAll}${endpoint}${apiKey}&language=es-ES&include_video=true&page=${numPag}` 
            :
                `${baseURL}${endpoint}/${id}${endpointVideo}${apiKey}&language=es-ES&append_to_response=images&include_image_language=en,null`,
            //url: 'https://api.themoviedb.org/3/discover/movie?api_key=fbc28a74e876b8349f85c0b02f3ae455&language=es-ES&page=1',
            //url: 'https://api.themoviedb.org/3/discover/tv?api_key=fbc28a74e876b8349f85c0b02f3ae455&language=es-ES&page=1'
            //url: 'https://api.themoviedb.org/3/movie/675353?api_key=fbc28a74e876b8349f85c0b02f3ae455&language=es-ES&append_to_response=images&include_image_language=en,null
            //url: 'https://api.themoviedb.org/3/movie/675353/videos?api_key=fbc28a74e876b8349f85c0b02f3ae455&language=en-US'
            headers:{
                Authorization: getToken(),
				...config.headers,
            }
        })
        return {
			status: response.status,
			data: response.data,
		}
    } catch (error) {
		return {
			status: error.response.status,
			error: error.message,
			data: error.response.data,
		}
    }
}

export const postRequest = async (endpoint, bodyData) =>{
    try{
        const response = await axios({
            method: 'POST',
            url: `${baseURL}${endpoint}`,
            data: bodyData,
            headers:{
                Authorization: getToken(),
				...config.headers,
            }
        })
        return {
            status: response.status,
            data: response.data
        }
    }catch(error){
		return {
			status: error.response.status,
			error: error.message,
			data: error.response.data,
		}
    }
}

export const putRequest = async (endpoint, id, bodyData) => {
    try{
        const response = await axios({
            method: 'PUT',
            url: `${baseURL}${endpoint}/${id}`,
            data: bodyData,
            headers:{
                Authorization: getToken(),
				...config.headers,
            }
        })
        return {
            status: response.status,
            data: response.data
        }
    } catch (error){
		return {
			status: error.response.status,
			error: error.message,
			data: error.response.data,
		}
    }
}

export const deleteRequest = async (endpoint, id) => {
    try{
        const response = await axios({
            method: 'DELETE',
            url: `${baseURL}${endpoint}/${id}`,
            headers:{
                Authorization: getToken(),
				...config.headers,
            }
        })
        return {
            status: response.status,
            data: response.data
        }
    } catch(error) {
		return {
			status: error.response.status,
			error: error.message,
			data: error.response.data,
		}
    }
}

export const getRequestSearch = async ( endpoint, search, numPag) =>{
    try{
        const response = await axios({
            method: 'GET',
            url: `${baseURL}/search${endpoint}${apiKey}&language=es-ES&query=${search}&page=${numPag}`, 
            //url: 'https://api.themoviedb.org/3/search/movie?api_key=fbc28a74e876b8349f85c0b02f3ae455&language=es-ES&query=halo',
            //url: 'https://api.themoviedb.org/3/search/multi?api_key=fbc28a74e876b8349f85c0b02f3ae455&language=es-ES&query=halo',
            headers:{
                Authorization: getToken(),
				...config.headers,
            }
        })
        return {
			status: response.status,
			data: response.data,
		}
    } catch (error) {
		return {
			status: error.response.status,
			error: error.message,
			data: error.response.data,
		}
    }
}