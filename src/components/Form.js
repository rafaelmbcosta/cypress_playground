import React from 'react';
import './Form.css';
import { TextField } from "@material-ui/core";
import Radio from './FormComponents/Radio';
import { AccentButton, Radios } from './styled/styledComponents'

export default () => {
  return(
    <form>
      <label>FIRST NAME</label>
      <TextField id="formFirstName" variant="outlined"></TextField>
      <label>LAST NAME:</label>
      <TextField id="formLastName" variant="outlined"></TextField>
      <label>DESCRIPTION:</label>
      <TextField id="formDescription" variant="outlined"></TextField>
      <label>SEXO:</label>
      <Radios>
        <Radio value="masculino" name="sexo" id="formSexoMasc" text="Masculino"></Radio>
        <Radio value="feminino" name="sexo" id="formSexoFem" text="Feminino"></Radio>
      </Radios>
      <AccentButton variant="contained" className="btnForm">SUBMIT</AccentButton>
    </form>
  )
}