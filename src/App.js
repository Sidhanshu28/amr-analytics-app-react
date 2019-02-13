import React, { Component } from 'react'
import Headerbar from './dhisHeader/index'
import AppHeader from './appHeader/index'
import Container from './container/index'


class App extends Component {
  render() {
    return (
      <div>
        <Headerbar/>
        <AppHeader/>
        <Container/>
    </div>
    );
  }
}

export default App;
