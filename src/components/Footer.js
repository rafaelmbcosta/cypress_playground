import React, { useState } from 'react';

export default () => {
  const [showText, setShowText] = useState('');

  return(
    <div className="footer">
      <p id="cy-back-text">{ showText }</p>
      <a href="#" onClick={() => setShowText("I'm Back !") }>Back</a>
    </div>
  );
}