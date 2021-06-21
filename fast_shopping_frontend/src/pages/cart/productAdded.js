import React, {Fragment} from "react"
import { useDispatch } from "react-redux";
import { addQty, deleteProduct, subtractQty } from "../../actions";
import { getPrice } from "../../scripts/data";
import { FlexRelative, IconBtn, RowCenterXY, Surface, TextSm, TextXs } from "../../styles/generalStyles";
import { AddIcon, SubtractIcon, DeleteIcon } from "../../styles/icons";

export const ProductAdded = (props) => {

  const {_id, loading} = props
  const {name, qty, categories, price} = props.values
  const dispatch = useDispatch()

  const handleSubstract = () => dispatch( subtractQty({_id}) )
  const handleAdd = () => dispatch( addQty({_id}) )
  const handleDelete = () => dispatch( deleteProduct({_id}) )

  function render(){
    let expressions = [], p$ = getPrice(price), total = getPrice(price*qty)
    expressions.push(
      <Surface key={`product_added_${_id}`} w={'100%'} className="m-2">
        <FlexRelative breakSm>
          <FlexRelative column width={'40'} className="justify-content-center">
            <TextSm>{name}</TextSm>
            <TextXs>{categories}</TextXs>
          </FlexRelative>
          <FlexRelative column width={'20'} className="justify-content-center">
            <TextXs>Unit price</TextXs>
            <TextSm>{p$}</TextSm>
          </FlexRelative>
          <FlexRelative column width={'20'} className="justify-content-center">
            <RowCenterXY><TextXs>Quantity</TextXs></RowCenterXY>
            <RowCenterXY>
              <IconBtn loading={loading ? 'true' : undefined} filled="true" disabled={qty === 1} onClick={handleSubstract} className="mx-1"><SubtractIcon /></IconBtn>
              <TextSm>{qty}</TextSm>
              <IconBtn loading={loading ? 'true' : undefined} filled="true" onClick={handleAdd} className="mx-1"><AddIcon /> </IconBtn>
              <IconBtn loading={loading ? 'true' : undefined} danger="true" onClick={handleDelete} className="ml-2"><DeleteIcon /></IconBtn>
            </RowCenterXY>
          </FlexRelative>
          <FlexRelative center column width={'20'} className="justify-content-center">
            <TextXs>Total</TextXs>
            <TextSm>{total}</TextSm>
          </FlexRelative>
        </FlexRelative>
      </Surface>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};