import React, {Fragment} from "react"
import TextField from '@material-ui/core/TextField';
import { Surface, Column100, Row100, TextSm, RowCenterXY, ButtonGeneral } from "../../styles/generalStyles";
import { useHistory } from "react-router-dom";
import { regexEml, regexNumbers } from "../../assets/const";
import { CircularProgress } from "@material-ui/core";

export const Form = (props) => {

  const {inputs, setInputs, loading, handleOrder, error} = props
  let history = useHistory()
  const handleList = () => history.push("/")

  function onChange(index, value){
		const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(prev => prev = newInputs);
	}

  function verify(){
    if(loading) return true
    if(inputs[0].length < 2) return true
    if(inputs[1].length < 1 ) return true
    if(inputs[2].length < 4) return true
    if(inputs[3].length < 2 || !inputs[3].match(regexNumbers)) return true
    if(!inputs[4].match(regexEml)) return true
    return false
  }

  function verifyEachInput(index){
    if(index === 0 && inputs[0].length < 2) return true
    if(index === 1 && inputs[1].length < 1 ) return true
    if(index === 2 && inputs[2].length < 4) return true
    if(index === 3 && ( inputs[3].length < 2 || !inputs[3].match(regexNumbers) )) return true
    if(index === 4 && !inputs[4].match(regexEml)) return true
    return false
  }

  function render(){
    let expressions = [], inputsLabels = [{name: "Name", type: "text"},{name: "Id", type: "text"},{name: "Address", type: "text"},{name: "Phone", type: "text"},{name: "Email", type: "email"}]
    let isDisabled = verify()
    expressions.push(
      <Column100 key={`form`}>
        <Row100><TextSm>Ready to order?</TextSm></Row100>
        <Surface w={'90%'} wSm={'50%'}>
          <RowCenterXY><TextSm>Please enter your information</TextSm></RowCenterXY>
          {inputsLabels.map((values, index) => {
            const {name, type} = values
            let error = verifyEachInput(index)
            return <Row100 className="mt-2" key={name}>
              <TextField 
                className="w-100" 
                value={inputs[index]} 
                error={error}
                disabled={Boolean(loading)} 
                label={name} 
                variant="filled" 
                type={type} 
                onChange={(e)=>{onChange(index, e.target.value)}} 
              />
            </Row100>
          })}
          <RowCenterXY>
            <ButtonGeneral onClick={handleList} outlinedfirst="true" disabled={Boolean(loading)} className="mx-2">Back to list</ButtonGeneral>
            <ButtonGeneral onClick={handleOrder} first="true" disabled={Boolean(isDisabled)} className="mx-2">Place Order</ButtonGeneral>
          </RowCenterXY>
          {loading && <RowCenterXY><CircularProgress /></RowCenterXY>}
          {error && <RowCenterXY><TextSm className="text-danger">{error}</TextSm></RowCenterXY>}
        </Surface>
      </Column100>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};