import React from 'react';
import './Radio.css';

const Radio = (props) => {
  return(
    <div className="radio-div"><input type="radio" value={props.value} name={props.name} id={props.id} /> <span className="radio-text">{ props.text }</span></div>);
}

export default Radio;
