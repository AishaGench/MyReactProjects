
import {createStore} from 'redux'
import {reducer} from '../reducers/todoListReducer'

 const myStore = createStore(reducer)

 export default myStore;
