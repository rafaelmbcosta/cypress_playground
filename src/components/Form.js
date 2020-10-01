import React, { useState } from 'react';
import './Form.css';
import { TextField } from "@material-ui/core";
import { Radio, Checkbox, Select, MenuItem } from '@material-ui/core'
import { AccentButton,  CheckBoxes } from './styled/styledComponents'

export default () => {
  const [radio, setRadio] = useState();
  const [language, setLanguage] = useState('');

  const handleSelectChange = (event) => {
    setLanguage(event.target.value);
  }
  return(
    <form>
      <label>FIRST NAME:</label>
      <TextField id="formFirstName" margin="dense"  variant="outlined"></TextField>
      <label>LAST NAME:</label>
      <TextField id="formLastName" margin="dense" variant="outlined"></TextField>
      <label>DESCRIPTION:</label>
      <TextField id="formDescription"  margin="dense" variant="outlined"></TextField>
      <label>SEXO:</label>
      <div className="radios">
        <span><Radio checked={radio === 'masculino'} value="masculino" name="sexo" id="formSexoMasc" text="Masculino"  onChange={(e) => setRadio(e.target.value)}/>Masculino</span>
        <span><Radio checked={radio === 'feminino'} value="feminino" name="sexo" id="formSexoFem" text="Feminino" onChange={(e) => setRadio(e.target.value)}/>Feminino</span>
      </div>
      <label>FAVORITE PIZZAS:</label>
      <CheckBoxes>
        <Checkbox type="checkbox" name="pizza" value="calabresa" id="formCalabresa" /> Calabresa
        <Checkbox type="checkbox" name="pizza" value="portuguesa" id="formPortuguesa" /> Portuguesa
        <Checkbox type="checkbox" name="pizza" value="marguerita" id="formMarguerita" /> Marguerita
        <Checkbox type="checkbox" name="pizza" value="muzzarela" id="formMuzzarela" /> Muzzarela
      </CheckBoxes>
      <label>BEST PROGRAMMING LANGUAGE? {language}</label>
      <Select
        name="celeste"
        margin="dense"
        variant="outlined"
        value={language}
        onChange={handleSelectChange}
      >
        <MenuItem id="celeste-ruby" value="ruby">Ruby</MenuItem>
        <MenuItem id="celeste-python" value="python">Python</MenuItem>
        <MenuItem id="celeste-javascript" value="javascript">Javascript</MenuItem>
        <MenuItem id="celeste-c" value="c++">C++</MenuItem>
      </Select>
      <AccentButton variant="contained" className="btnForm">SUBMIT</AccentButton>

    </form>
  )
}