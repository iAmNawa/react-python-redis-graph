import React, { Component } from 'react';
import './Graph.css';

import CytoscapeComponent from 'react-cytoscapejs';

class Graph extends Component {
  render(){
    const elements = [
       { data: { id: 'one', label: 'Node 1' }, position: { x: 40, y: 40 } },
       { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 40 } },
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
    ];
    return <CytoscapeComponent elements={elements} style={{ width: '100%', height: '1000px' }} />;
  }
}

export default Graph;
