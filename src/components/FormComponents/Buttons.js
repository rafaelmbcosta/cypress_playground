import React from 'react';
import ButtonBasic from './Buttons/ButtonBasic';
import DelayedButton from './Buttons/DelayedButton';
import AlertButton from './Buttons/AlertButton';
import TimeButton from './Buttons/TimeButton';
import ConfirmButton from './Buttons/ConfirmButton';
import { ButtonList } from '../styled/styledComponents';

const Buttons = () => {
  return(
    <ButtonList>
      <ButtonBasic className="ButtonBasic" />
      <DelayedButton />
      <AlertButton />
      <ConfirmButton />
      <TimeButton />
    </ButtonList>
  );
}

export default Buttons