import React from 'react';
import { SecondaryButton } from '../../styled/styledComponents';
import { useDispatch } from 'react-redux';
import { setTime } from './timeButtonSlice';

const TimeButton = () => {
  const dispatch = useDispatch();
  return <SecondaryButton
            cy-data="time-button"
            onClick={() => dispatch(setTime())}
          >
              Time
          </SecondaryButton>;
}


export default TimeButton;