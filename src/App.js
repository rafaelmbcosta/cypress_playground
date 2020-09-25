import React from 'react';
import './App.css';

import Buttons from './components/FormComponents/Buttons';
import Footer from './components/Footer';
import Form from './components/Form';
import { AppCard } from './components/styled/styledComponents';

function App() {
  return (
    <div className="container">
      <AppCard className="App">
        <h1 className="playground-title">CYPRESS PLAYGROUND</h1>
        <hr />
        <div className="buttons-wrapper">
          <Buttons  />
        </div>
        <hr />
        <Form />
        <hr/>
        <Footer className="Footer" />
      </AppCard>
    </div>
  );
}

export default App;
