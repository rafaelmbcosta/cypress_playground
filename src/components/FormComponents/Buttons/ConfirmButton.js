import React from 'react';
import { SecondaryButton } from '../../styled/styledComponents'

const ConfirmButton = () => {
  return <SecondaryButton
            id="confirm"
            onClick={() => window.confirm('Press a Button')}
          >
            Confirm
          </SecondaryButton>;
}

export default ConfirmButton;