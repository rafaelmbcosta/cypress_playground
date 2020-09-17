import React from 'react';
import './Form.css';
import { TextField } from "@material-ui/core"
import { AccentButton } from './styled/styledComponents'

export default () => {
  return(
    <form>
      <label>FIRST NAME</label>
      <TextField id="formFirstName" variant="outlined"></TextField>
      <label>LAST NAME:</label>
      <TextField id="formLastName" variant="outlined"></TextField>
      <label>DESCRIPTION:</label>
      <TextField id="formDescription" variant="outlined"></TextField>
      <AccentButton variant="contained" className="btnForm">SUBMIT</AccentButton>
    </form>
  )
}