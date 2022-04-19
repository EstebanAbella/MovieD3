import {
	FAVOURITES_GET,
	FAVOURITES_POST,
	FAVOURITES_PUT,
    FAVOURITES_DELETE,
} from '../types'

const initialState = {
    favourites : JSON.parse(localStorage.getItem('favourites'))?JSON.parse(localStorage.getItem('favourites')):[]
}

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVOURITES_GET:
                return { favourites: action.payload}
        case FAVOURITES_POST:
            var addFav = state.favourites.filter(nam => nam.id === action.payload.id)
            if(Object.keys(addFav).length === 0){
                const addF = [...state.favourites, action.payload]
                localStorage.setItem('favourites', JSON.stringify(addF))
                return { favourites: [...state.favourites, action.payload] }
            }else{
                return{...state}
            }
        case FAVOURITES_PUT:
            return { favourites: state.favourites.map(f => f.id === action.payload.id ? action.payload : f) }
        case FAVOURITES_DELETE:
            const newArray =  state.favourites.filter(fav => fav.id !== action.payload)
            localStorage.setItem('favourites', JSON.stringify(newArray))
            return { favourites: state.favourites.filter(fav => fav.id !== action.payload)}
        default:
            return {...state}    
        }
}

export default favouritesReducer