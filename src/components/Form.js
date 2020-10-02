import React, { useState } from 'react';
import './Form.css';
import { TextField } from "@material-ui/core";
import { Radio, Checkbox, Select, MenuItem } from '@material-ui/core'
import { AccentButton,  CheckBoxes, FullTextField } from './styled/styledComponents'
import { useSelector } from 'react-redux'
import { selectButtonState } from './FormComponents/delayerButtonSlice'

export default () => {
  const [radio, setRadio] = useState();
  const [language, setLanguage] = useState('');
  const buttonState = useSelector(selectButtonState)

  const handleSelectChange = (event) => {
    setLanguage(event.target.value);
  }

  const showDelayedText = () => {
    if (buttonState.show) {
      return <FullTextField id="delayed-text" margin="dense" variant="outlined" placeholder="Called from delayed button" />;
    }
  }

  return(
    <form>
      <label>FIRST NAME:</label>
      <TextField id="formFirstName" margin="dense"  variant="outlined"></TextField>
      <label>LAST NAME:</label>
      <TextField id="formLastName" margin="dense" variant="outlined"></TextField>
      <label>DESCRIPTION:</label>
      <TextField id="formDescription" margin="dense" variant="outlined"></TextField>
      <label>GENDER:</label>
      <div className="radios">
        <span><Radio checked={radio === 'male'} value="male" name="gender" id="formGenderMasc" text="Male"  onChange={(e) => setRadio(e.target.value)}/>Male</span>
        <span><Radio checked={radio === 'female'} value="female" name="gender" id="formGenderFem" text="Female" onChange={(e) => setRadio(e.target.value)}/>Female</span>
      </div>
      <label>FAVORITE PIZZAS:</label>
      <CheckBoxes>
        <Checkbox type="checkbox" name="pizza" value="calabresa" id="formCalabresa" /> Calabresa
        <Checkbox type="checkbox" name="pizza" value="portuguesa" id="formPortuguesa" /> Portuguesa
        <Checkbox type="checkbox" name="pizza" value="marguerita" id="formMarguerita" /> Marguerita
        <Checkbox type="checkbox" name="pizza" value="muzzarela" id="formMuzzarela" /> Muzzarela
      </CheckBoxes>
      <label>BEST PROGRAMING LANGUAGE?</label>
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
      { showDelayedText() }
      <AccentButton variant="contained" className="btnForm">SUBMIT</AccentButton>

    </form>
  )
}