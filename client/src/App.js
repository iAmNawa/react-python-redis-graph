import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CytoscapeGraph from './CytoscapeGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CytoscapeGraph />
      </div>
    );
  }
}

export default App;
