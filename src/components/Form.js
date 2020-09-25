import React, { useState } from 'react';
import './Form.css';
import { TextField } from "@material-ui/core";
import { Radio, Checkbox } from '@material-ui/core'
import { AccentButton,  CheckBoxes } from './styled/styledComponents'

export default () => {
  const [radio, setRadio] = useState();
  return(
    <form>
      <label>FIRST NAME:</label>
      <TextField id="formFirstName" variant="outlined"></TextField>
      <label>LAST NAME:</label>
      <TextField id="formLastName" variant="outlined"></TextField>
      <label>DESCRIPTION:</label>
      <TextField id="formDescription" variant="outlined"></TextField>
      <label>SEXO:</label>
      <div className="radios">
        <span><Radio checked={radio === 'masculino'} value="masculino" name="sexo" id="formSexoMasc" text="Masculino"  onChange={(e) => setRadio(e.target.value)}/>Masculino</span>
        <span><Radio checked={radio === 'feminino'} value="feminino" name="sexo" id="formSexoFem" text="Feminino" onChange={(e) => setRadio(e.target.value)}/>Feminino</span>
      </div>
      <label className="full">FAVORITE PIZZAS:</label>
      <CheckBoxes className="full">
        <Checkbox type="checkbox" name="pizza" value="calabresa" id="formCalabresa" /> Calabresa
        <Checkbox type="checkbox" name="pizza" value="portuguesa" id="formPortuguesa" /> Portuguesa
        <Checkbox type="checkbox" name="pizza" value="marguerita" id="formMarguerita" /> Marguerita
        <Checkbox type="checkbox" name="pizza" value="muzzarela" id="formMuzzarela" /> Muzzarela
      </CheckBoxes>
      <AccentButton variant="contained" className="btnForm">SUBMIT</AccentButton>
    </form>
  )
}