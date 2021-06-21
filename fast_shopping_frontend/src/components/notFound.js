import React from "react"
import { useHistory } from "react-router-dom";
import { ColumnCenterXY, TextLg, ButtonGeneral } from "../styles/generalStyles";
import { NotFoundIcon } from "../styles/icons";

export const NotFound = (props) => {

	let history = useHistory()
  const handleHome = () => history.push('/')

  return <ColumnCenterXY className="center">
    <TextLg primary>Ups! There's nothing here.</TextLg>
    <NotFoundIcon className="svgBg" />
    <ButtonGeneral className="mt-3" first="true" onClick={handleHome}>Go to home</ButtonGeneral>
  </ColumnCenterXY>
};