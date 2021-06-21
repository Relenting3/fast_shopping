import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setInitialState } from "../../actions";
import { ColumnCenterXY } from "../../styles/generalStyles";
import { TextMd, TextSm, ButtonGeneral } from "../../styles/generalStyles";
import { FinishedIcon } from "../../styles/icons";

export const Thanks = (props) => {

  const finished = useSelector(store => store.finished)
  let history = useHistory()
  const dispatch = useDispatch()

  const handleHome = () => {history.push('/'); dispatch(setInitialState())}

  return <ColumnCenterXY className="center">
    <TextMd className="text-center mx-2"  first="true">Thanks for your purchase</TextMd>
    <TextSm className="text-center mx-2" >{finished?.name ? finished.name : ''}, we have created your order {finished?.order ? finished.order : ''}. Your items will be soon at your door</TextSm>
    <FinishedIcon className="svgBg" />
    <ButtonGeneral first="true" className="mt-5" onClick={handleHome}>Start again</ButtonGeneral>
  </ColumnCenterXY>
};