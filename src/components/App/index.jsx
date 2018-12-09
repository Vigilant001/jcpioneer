import React, { Component } from 'react';
import {Navigation, ContentArea} from 'components'
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Navigation/>
      <ContentArea />
      </div>
    );
  }
}

export default App;

