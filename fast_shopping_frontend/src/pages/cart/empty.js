import React from "react"
import { useHistory } from "react-router-dom";
import { ColumnCenterXY } from "../../styles/generalStyles";
import { TextMd, ButtonGeneral } from "../../styles/generalStyles";
import { EmptyIcon } from "../../styles/icons";

export const Empty = (props) => {

	let history = useHistory()
  const handleHome = () => history.push('/')

  return <ColumnCenterXY className="center">
    <TextMd first className="text-center">You have not added any products to the cart!</TextMd>
    <EmptyIcon className="svgBg" />
    <ButtonGeneral className="mt-3" first="true" onClick={handleHome}>Go to home</ButtonGeneral>
  </ColumnCenterXY>
};