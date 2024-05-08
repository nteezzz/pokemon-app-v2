
import { combineReducers } from 'redux';
import pokemonReducer from '../slice/fetchDataSlice.jsx'
import themeReducer from '../slice/themeSlice.jsx'
import authReducer from '../slice/authSlice.jsx'


const rootReducer = combineReducers({
  theme: themeReducer, 
  auth: authReducer, 
  pokemon: pokemonReducer,
  });

export default rootReducer;
