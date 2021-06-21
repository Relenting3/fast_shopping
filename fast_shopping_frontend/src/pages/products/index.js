import React, {Fragment, useState} from "react"
import { useProducts } from "./hooks/useProducts";
import { useCategories } from "./hooks/useCategories";
import { RowCenterXY, WrapperItems } from "../../styles/generalStyles";
import { CircularProgress } from "@material-ui/core";
import { TextLg, ColumnCenterXY } from "../../styles/generalStyles";
import { EmptyIcon } from "../../styles/icons";
import { Product } from "./product";
import { Pagination } from '@material-ui/lab';
import { ErrorIcon } from "../../styles/icons";
const Products = (props) => {

  const rowsPerPage = 20 
  const [page, setPage] = useState(1)
  const { error, loading, data } = useProducts()
  const { data: categories } = useCategories()
  const handleChangePage = (e, value) => setPage(prev => prev = value)

  function render(){
    if(loading) return <RowCenterXY className="center"><CircularProgress className="first"/></RowCenterXY>
    if(error) return <ColumnCenterXY className="center"><TextLg className="text-center">There was an error while we were retrieving the products. Try again later.</TextLg><ErrorIcon className="svgBg" /></ColumnCenterXY>
    if(data.length === 0) return <ColumnCenterXY className="center"><TextLg className="text-center" first>Ups! It seems like there are no products here.</TextLg><EmptyIcon className="svgBg mt-5"/></ColumnCenterXY>
    let expressions = []
    expressions.push(
      <ColumnCenterXY key={`Wrapper_products`}>
        <WrapperItems w={`90`}>
          {data.slice((page-1) * rowsPerPage, ((page-1)*rowsPerPage)+rowsPerPage)
            .map((values)=>{
              return <Product key={`${values._id}`} values={values} categories={categories}  />
            })
          }
        </WrapperItems>
        <Pagination className="my-5" size="large" count={Math.ceil(data.length / rowsPerPage)} page={page} onChange={handleChangePage} />
      </ColumnCenterXY>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};

export default Products