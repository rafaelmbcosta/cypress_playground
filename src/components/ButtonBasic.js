import React, { useState } from 'react'

export default () => {
  const [basicText, setBasicText] = useState('ClickMe!');

  const changeText = () => {
    setBasicText('Thanks!')
  }

  return(
    <input type="button" value={basicText} id="buttonBasic" onClick={() => changeText() } />
  )
}