import React, { useState } from 'react';
import { AccentButton } from '../styled/styledComponents';


export default () => {
  const [basicText, setBasicText] = useState('CLICK ME !');

  const changeText = () => {
    setBasicText('THANKS !')
  }

  return(
    <div>
      <AccentButton id="buttonBasic" onClick={() => changeText() }>{basicText}</AccentButton>
    </div>
  )
}