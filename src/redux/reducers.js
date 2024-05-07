
import { combineReducers } from 'redux';
import pokemonReducer from './slice/pokemonSlice.jsx';
import themeReducer from '../redux/slice/themeSlice.jsx'
import authReducer from '../redux/slice/authSlice.jsx'
import pokemonDetailReducer from './slice/pokemonDetailSlice.jsx';


const rootReducer = combineReducers({
  theme: themeReducer, 
  auth: authReducer, 
  pokemon: pokemonReducer,
  pokemonDetail: pokemonDetailReducer,
});

export default rootReducer;
