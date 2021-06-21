import { CircularProgress } from "@material-ui/core";
import React, {Fragment} from "react"
import { getCategory, getPrice } from "../../scripts/data";
import { Surface, Row100, TextSm, TextXs, ButtonGeneral } from "../../styles/generalStyles";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addQty } from "../../actions";

export const Product = (props) => {

  const {values, categories} = props
  const {name, categories: productCategories, price, desc, _id} = values
  const products = useSelector(store => store.products)
  const dispatch = useDispatch()

  const handleAdd = () =>{
    let category = categories ? getCategory(productCategories, categories) : ''
    if(products[_id]) return dispatch( addQty({_id}) )
    return dispatch( addProduct({_id, qty: 1, name, price, categories: category}) )
  }

  function render(){
    let expressions = [], p$ = getPrice(price)
    let category = categories ? getCategory(productCategories, categories) : ''
    expressions.push(
      <Surface key={`surface_${_id}`} w={'100%'} wSm={'45%'} className="m-2">
        <Row100><TextSm>{name}</TextSm></Row100>
        {categories ? <Row100><TextSm>{category}</TextSm></Row100> : <CircularProgress />}
        <Row100><TextXs>{desc}</TextXs></Row100>
        <Row100 className="justify-content-between center-y">
          <ButtonGeneral first="true" onClick={handleAdd}>Add to cart</ButtonGeneral>
          <TextSm>{p$}</TextSm>
        </Row100>
      </Surface>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};