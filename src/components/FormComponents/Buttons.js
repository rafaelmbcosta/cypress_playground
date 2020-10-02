import React from 'react';
import ButtonBasic from './ButtonBasic';
import DelayedButton from './DelayedButton';
import AlertButton from './AlertButton';
import ConfirmButton from './ConfirmButton';
import { ButtonList } from '../styled/styledComponents';

const Buttons = () => {
  return(
    <ButtonList>
      <ButtonBasic className="ButtonBasic" />
      <DelayedButton />
      <AlertButton />
      <ConfirmButton />
    </ButtonList>
  );
}

export default Buttons