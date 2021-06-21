import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { TextMd, IconBtn } from "../styles/generalStyles";
import { CartIcon, IsotypeIcon } from "../styles/icons";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "../styles/generalStyles";
export const Nav = (props) => {

  let location = useLocation();
  let history = useHistory()
  const products = useSelector(store => store.products)
  const handleCart = () => history.push("/cart")

  const CartButton = () => {
    return <div className="ml-auto mr-1 mr-sm-4">
      <IconBtn onClick={handleCart} bg="true">
        <CartIcon />
      </IconBtn>
      {Object.entries(products).length > 0 && <Badge cart onClick={handleCart}>{Object.entries(products).length}</Badge>}
    </div>
  }

  return <AppBar position="sticky">
    <Toolbar className="bgWhite px-4">
      <div className="d-flex align-items-center">
        <IsotypeIcon className="nav_isotype" />
        <TextMd className="ml-2" first>Fast Shopping</TextMd>
      </div>
      {location.pathname === '/' && <CartButton />}
    </Toolbar>
  </AppBar>
};