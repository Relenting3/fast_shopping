export const addProduct = payload => ({ //{_id: string, qty: 1, name: string, price: number, categories: string }
  type: 'ADD_PRODUCT',
  payload
})

export const deleteProduct = payload => ({ //{_id: string}
  type: 'DELETE_PRODUCT',
  payload
})

export const addQty = payload => ({ //{_id: string}
  type: 'ADD_QTY',
  payload
})

export const subtractQty = payload => ({ //{_id: string}
  type: 'SUBTRACT_QTY',
  payload
})

export const setInitialState = () => ({ //Empty. Returns {products: {}, finished: false}
  type: 'SET_INITIAL_STATE'
})

export const setFinished = payload => ({ //{name: string, order: string } delete localstorage here
  type: 'SET_FINISHED',
  payload
})