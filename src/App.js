import React from 'react';
import './App.css';

import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1 className="playground-title">CYPRESS PLAYGROUND</h1>
        <hr />
        <div className="buttons-wrapper">
          <Buttons  />
        </div>
        <hr />
        <Form />
        <hr/>
        <Footer className="Footer" />
      </div>
    </div>
  );
}

export default App;
