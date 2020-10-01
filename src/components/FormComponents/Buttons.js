import React from 'react';
import ButtonBasic from './ButtonBasic';
import DelayedButton from './DelayedButton';
import { ButtonList } from '../styled/styledComponents';

const Buttons = () => {
  return(
    <ButtonList>
      <ButtonBasic className="ButtonBasic" />
      <DelayedButton />
    </ButtonList>
  );
}

export default Buttons