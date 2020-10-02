import React from 'react';
import { SecondaryButton } from '../styled/styledComponents'
import { useSelector, useDispatch } from 'react-redux'
import { selectButtonState, setButtonStateAsync } from './delayerButtonSlice';

const DelayedButton = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectButtonState)
  return <SecondaryButton
            id="wait-button"
            onClick={() => dispatch(setButtonStateAsync(true))}
            disabled={details.loading}>
              { details.loading ? 'Loading...' : 'Waiting Button' }
          </SecondaryButton>;
}


export default DelayedButton;