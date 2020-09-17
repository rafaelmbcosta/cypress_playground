import React, { useState } from 'react';
import { Button } from '@material-ui/core';

export default () => {
  const [basicText, setBasicText] = useState('CLICK ME !');

  const changeText = () => {
    setBasicText('THANKS !')
  }

  return(
    <div>
      <Button variant="contained" id="buttonBasic" onClick={() => changeText() }>{basicText}</Button>
    </div>
  )
}