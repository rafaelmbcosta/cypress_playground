import React, { useState } from 'react';
import { SecondaryButton } from '../styled/styledComponents';


export default () => {
  const [basicText, setBasicText] = useState('CLICK ME !');

  const changeText = () => {
    setBasicText('THANKS !')
  }

  return <SecondaryButton id="buttonBasic" onClick={() => changeText() }>{basicText}</SecondaryButton>;
}