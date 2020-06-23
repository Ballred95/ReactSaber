import React, { Component } from 'react';
import Saber from './saber';

export default class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      isOn: false, 
      
    }
  }

  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <Saber />
      </div>
    );
  }
}
