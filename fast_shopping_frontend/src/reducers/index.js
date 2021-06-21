import { persistData } from "../scripts/data"

const reducer = (state, action) => {
  switch (action.type){
    case 'ADD_PRODUCT':{ //Adds a product to the cart.
      const {_id, name, qty, price, categories} = action.payload
      let obj = {...state.products}
      obj[_id] = {name, qty, price, categories}
      persistData({ ...state, products: obj })
      return { ...state, products: obj }
    }
    case 'DELETE_PRODUCT':{ //Deletes a product from the cart.
      const {_id} = action.payload
      let obj = {...state.products}
      delete obj[_id]
      persistData({ ...state, products: obj })
      return { ...state, products: obj }
    }
    case 'ADD_QTY':{ // Adds one unit to a product on the cart.
      const {_id} = action.payload
      let obj = {...state.products}
      obj[_id].qty += 1
      persistData({ ...state, products: obj })
      return { ...state, products: obj }
    }
    case 'SUBTRACT_QTY':{ //Subtract one unit to a product on the cart.
      const {_id} = action.payload
      let obj = {...state.products}
      obj[_id].qty -= 1
      persistData({ ...state, products: obj })
      return { ...state, products: obj }
    }
    case 'SET_INITIAL_STATE': { //Sets the initial state from the store.
      return {products: {}, finished: false}
    }
    case 'SET_FINISHED':{ //Finish the order.
      const {name, order} = action.payload
			window.localStorage.removeItem('data')
      return {products: {}, finished: {order: order, name}}
    }
    default: return state
  }
}
export default reducer