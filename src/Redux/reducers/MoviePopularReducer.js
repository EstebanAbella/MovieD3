import {
	MOVIES_GET,
	MOVIES_POST,
	MOVIES_DELETE,
	MOVIES_PUT,
} from '../types'

const initialState = {
    movie : [],
}

const moviePopularReducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case MOVIES_GET:
            return { movie: action.payload }
        case MOVIES_POST:
            return { movie: [...state.movie, action.payload] }
        case MOVIES_PUT:
            return { movie: state.movie.map( mov => mov.id === action.payload.id ? action.payload : mov) }
        case MOVIES_DELETE:
            return { movie: state.movie.filter(mov => mov.id !== action.payload.id) }
        default:
		    return { ...state }
    }
} 


export default moviePopularReducer