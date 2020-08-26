import React from 'react';
import './App.css';

import Buttons from './components/Buttons';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1 className="playground-title">CYPRESS PLAYGROUND</h1>
        <Buttons className="Buttons" />
      </div>
    </div>
  );
}

export default App;
