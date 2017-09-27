import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

class App extends Component {
  render() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
}

export default App;
