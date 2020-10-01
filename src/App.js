import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/store'
import Buttons from './components/FormComponents/Buttons';
import Footer from './components/Footer';
import Form from './components/Form';
import { AppCard } from './components/styled/styledComponents';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
