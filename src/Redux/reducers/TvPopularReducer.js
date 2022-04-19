import {
	TV_GET,
	TV_POST,
	TV_DELETE,
	TV_PUT,
} from '../types'

const initialState = {
    tv: [],
}

const tvPopularReducer = ( state = initialState, action) => {
    switch (action.type){
        case TV_GET:
            return { tv: action.payload }
        case TV_POST:
            return { tv: [...state.tv, action.payload] }
        case TV_PUT:
            return { tv: state.tv.map( t => t.id === action.payload.id ? action.payload : t)}
        case TV_DELETE:
            return { tv: state.tv.filter( t => t.id !== action.payload.id)}
        default:
            return {...state}
    }
}

export default tvPopularReducer