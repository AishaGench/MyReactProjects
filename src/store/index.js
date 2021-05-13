import {createStore} from 'redux'
import combineReducers from '../reducer'

const store = createStore(combineReducers)

export default store;