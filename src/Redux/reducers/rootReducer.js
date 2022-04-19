import { combineReducers } from 'redux'
import moviePopularReducer from './MoviePopularReducer'
import tvPopularReducer from './TvPopularReducer.js'
import favouritesReducer from './FavouritesReducer'


export const rootReducer = combineReducers({
	movie: moviePopularReducer,
	tv: tvPopularReducer,
	favourites: favouritesReducer,
})
