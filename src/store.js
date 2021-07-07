import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {themeReducer} from './theme/reducer'

const rootReducer = combineReducers({
  themeReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));
