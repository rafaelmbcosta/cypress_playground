import React from 'react';
import { SecondaryButton } from '../styled/styledComponents'
import { useSelector, useDispatch } from 'react-redux'
import { selectButtonState, show } from './delayerButtonSlice';

const DelayedButton = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectButtonState)
  return <SecondaryButton onClick={() => dispatch(show())}>Wait Button </SecondaryButton>;
}


export default DelayedButton;