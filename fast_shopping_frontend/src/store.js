import { createStore } from "redux"
import reducer from "./reducers"

let data = window.localStorage.getItem('data')
const initialState = data ? JSON.parse(data) : {
  products: {},
  finished: false
}

const store = createStore(reducer, initialState)
export default store