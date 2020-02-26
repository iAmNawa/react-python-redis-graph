import React, { Component } from 'react';
import './Graph.css';

import CytoscapeComponent from 'react-cytoscapejs';

class Graph extends Component {
  render(){
    const elements = [
       { data: { id: 'one', label: 'Node 1' }},
       { data: { id: 'two', label: 'Node 2' }},
       { data: { id: 'three', label: 'Node 3' }},
       { data: { id: 'four', label: 'Node 4' }},
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
       { data: { source: 'two', target: 'three', label: 'Edge from Node2 to Node3' } },
       { data: { source: 'three', target: 'four', label: 'Edge from Node3 to Node4' } },
       { data: { source: 'one', target: 'four', label: 'Edge from Node1 to Node4' } },
    ];
    const layout = { name: 'random' };
    return <CytoscapeComponent elements={elements} layout={layout} style={{ width: '100%', height: '800px' }} />;
  }
}

export default Graph;
