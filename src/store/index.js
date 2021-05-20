import {createStore} from "reduc";
import reducer from "../reducers/index"

const myStore = createStore(reducer)

export default myStore;