import React, { Component } from 'react';

import Foo from '~/Foo';
import Bar from '~/Bar';
import Baz from '~/Baz';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Foo}
        {Bar}
        {Baz}
      </div>
    );
  }
}

export default App;
