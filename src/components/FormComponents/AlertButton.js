import React from 'react';
import { SecondaryButton } from '../styled/styledComponents'

const AlertButton = () => {
  return <SecondaryButton
            id="alert"
            onClick={() => alert('Hello there')}
          >
            Alert
          </SecondaryButton>
}

export default AlertButton;