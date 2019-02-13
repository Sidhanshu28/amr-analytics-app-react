import React, { Component } from 'react'
import Sidebar from './sidebar/index'
import GraphContainer from './graphContainer/index'

class Container extends Component {
  render() {
    return (
      <div class='row'>
          <Sidebar/>
          <GraphContainer/>
    </div>
    );
  }
}

export default Container;
