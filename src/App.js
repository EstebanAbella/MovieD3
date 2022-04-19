import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import './App.css'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import {isLogin} from './PrivateRoute/isLogin'
import MovieAllPAge from './Pages/MovieAllPAge'
import TvAllPAge from './Pages/TvAllPAge'
import ViewSelectedPage from './Pages/ViewSelectedPage'
import FavouritesPage from './Pages/FavouritesPage'
import SearchResults from './Pages/SearchResults';

function App() {
	return (
		<Router>

			<AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				className="switch-wrapper"
			>
				<Route path="/login" component={LoginPage} />
				<Route
					path='/movie-all'
					render={() => (isLogin() ? <MovieAllPAge /> : <Redirect to="/login" />)}
				/>
				<Route
					path='/tv-all'
					render={() => (isLogin() ? <TvAllPAge /> : <Redirect to="/login" />)}
				/>
				<Route
					path='/view-selected/:view/:id'
					render={() => (isLogin() ? <ViewSelectedPage /> : <Redirect to="/login" />)}
				/>
				<Route
					path='/favourites'
					render={() => (isLogin() ? <FavouritesPage /> : <Redirect to="/login" />)}
				/>
				<Route
					path='/search-results/:search'
					render={() => (isLogin() ? <SearchResults /> : <Redirect to="/login" />)}
				/>
				<Route
					path="/" exact
					render={() => (isLogin() ? <HomePage /> : <Redirect to="/login" />)}
				/>
				<Route
					path="*" exact
					render={() => (isLogin() ? <HomePage /> : <Redirect to="/login" />)}
				/>
			</AnimatedSwitch>
    	</Router>
  );
}

export default App;
