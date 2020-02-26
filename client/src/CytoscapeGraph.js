import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import React, { Component } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import './Graph.css';

Cytoscape.use(COSEBilkent);

class CytoscapeGraph extends Component {
  componentDidMount() {
    this.cy.style()
      .selector('edge')
        .style({
          'line-color': '#0089D0'
      })
    .update()
    this.cy.style()
      .selector('node#one')
        .style({
          'background-color': '#F37021'
      })
    .update()
    this.cy.style()
      .selector('node#three')
        .style({
          'background-color': '#F37021'
      })
    .update()
    this.cy.style()
      .selector('node#two')
        .style({
          'background-color': '#FCB711'
      })
    .update()
    this.cy.style()
      .selector('node#four')
        .style({
          'background-color': '#FCB711'
      })
    .update()
    this.cy.style()
      .selector('node#five')
        .style({
          'background-color': '#009925'
      })
    .update()
    this.cy.style()
      .selector('node#six')
        .style({
          'background-color': '#009925'
      })
    .update()
    this.cy.style()
      .selector('node#seven')
        .style({
          'background-color': '#009925'
      })
    .update()
    this.cy.style()
      .selector('node#eight')
        .style({
          'background-color': '#009925'
      })
    .update()
    this.cy.style()
      .selector('node#nine')
        .style({
          'background-color': '#009925'
      })
    .update()
    this.cy.style()
      .selector('node#ten')
        .style({
          'background-color': '#6460AA'
      })
    .update()
    this.cy.style()
      .selector('node#eleven')
        .style({
          'background-color': '#6460AA'
      })
    .update()
  }
  render(){
    const elements = [
       { data: { id: 'one', label: 'Node 1' }},
       { data: { id: 'two', label: 'Node 2' }},
       { data: { id: 'three', label: 'Node 3' }},
       { data: { id: 'four', label: 'Node 4' }},
       { data: { id: 'five', label: 'Node 5' }},
       { data: { id: 'six', label: 'Node 5' }},
       { data: { id: 'seven', label: 'Node 5' }},
       { data: { id: 'eight', label: 'Node 5' }},
       { data: { id: 'nine', label: 'Node 5' }},
       { data: { id: 'ten', label: 'Node 10' }},
       { data: { id: 'eleven', label: 'Node 11' }},
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
       { data: { source: 'two', target: 'three', label: 'Edge from Node2 to Node3' } },
       { data: { source: 'three', target: 'four', label: 'Edge from Node3 to Node4' } },
       { data: { source: 'one', target: 'four', label: 'Edge from Node1 to Node4' } },
       { data: { source: 'four', target: 'five', label: 'Edge from Node4 to Node5' } },
       { data: { source: 'four', target: 'six', label: 'Edge from Node4 to Node5' } },
       { data: { source: 'four', target: 'seven', label: 'Edge from Node4 to Node5' } },
       { data: { source: 'four', target: 'eight', label: 'Edge from Node4 to Node5' } },
       { data: { source: 'four', target: 'nine', label: 'Edge from Node4 to Node5' } },
       { data: { source: 'one', target: 'ten', label: 'Edge from Node1 to Node10' } },
       { data: { source: 'one', target: 'eleven', label: 'Edge from Node1 to Node11' } },
    ];
    const layout = { name: 'cose-bilkent' };
    return <CytoscapeComponent cy={(cy) => { this.cy = cy }} elements={elements} layout={layout} style={{ width: '100%', height: '800px', backgroundColor: '#22c6f0' }} />;
  }
}

export default CytoscapeGraph;
