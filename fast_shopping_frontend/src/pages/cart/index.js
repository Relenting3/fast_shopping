import React, {Fragment, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPrice } from "../../scripts/data"
import { TextMd, TextSm, ColumnCenterXY, Row100 } from "../../styles/generalStyles"
import { Empty } from "./empty"
import { ProductAdded } from "./productAdded"
import { Form } from "./form"
import { setFinished } from "../../actions"
import { useHistory } from "react-router-dom"

const Cart = (props) => {
  
  const products = useSelector(store => store.products)
  const dispatch = useDispatch()
  let history = useHistory()
  const [inputs, setInputs] = useState(['','','','',''])//name, id, address, phone, email
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleOrder(){
    try {
      setLoading(prev => prev = true)
      if(error) setError(prev => prev = null)
      let productsIds = [], qtys = []
      for(const [key,values] of Object.entries(products)){
        const {qty} = values
        productsIds.push(key)
        qtys.push(qty)
      }
      let body = {
        cli:{
          name: inputs[0],
          id: inputs[1],
          addr: inputs[2],
          phn: inputs[3],
          eml: inputs[4]
        },
        products: productsIds,
        qty: qtys
      }
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
      let order = await fetch(`${process.env.REACT_APP_API_URL}orders/request`, options).then()
      let response = await order.json()
      dispatch(setFinished( {name: inputs[0], order: response.data} ))
      history.push("/thanks")
    } catch (error) {
      console.error(error)
      setError(prev => prev = 'Sorry. There was an error while we were trying to create the order.')
      setLoading(prev => prev = false)
    }
  }

  const Total = (props) => {
    const {total} = props
    let p$ = getPrice(total)
    return <Row100 className="justify-content-end">
      <TextSm>{`Total: ${p$}`}</TextSm>
    </Row100>
  }

  function render(){
    if(Object.entries(products).length === 0) return <Empty />
    let expressions = [], productsAdded = [], total = 0
    for(const [key, values] of Object.entries(products)){
      total+= values.price*values.qty
      productsAdded.push(
        <ProductAdded key={key} values={values} _id={key} loading={loading} />
      )
    }
    expressions.push(
      <ColumnCenterXY key={`cart`}>
        <ColumnCenterXY w={`70`} className="mt-3">
          <Row100><TextMd first>Shopping Cart</TextMd></Row100>
          {productsAdded}
          <Total total={total} />
          <Form inputs={inputs} setInputs={setInputs} loading={loading} error={error} handleOrder={handleOrder}/>
        </ColumnCenterXY>
      </ColumnCenterXY>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
}
export default Cart