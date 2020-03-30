import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import React, { Component } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import './CytoscapeGraph.css'
import './Graph.css';
import cat from './photos/cat.jpg';


Cytoscape.use(COSEBilkent);

class CytoscapeGraph extends Component {
  font_to_char(classname) {
   var span = document.createElement('span');
   span.className = classname;
   span.style.display = 'none';
   document.body
     .insertBefore(span, document.body.firstChild);
   var char = window
     .getComputedStyle(span, ':before')
     .content
     .replace(/'|"/g, '');
   span.remove();
   return char;
 }
  componentDidMount() {
    this.cy.style()
      .selector('edge')
        .style({
          'line-color': 'darkgrey',
          'border-width': '2px',
          'border-color': 'lightgrey'
      })
    .update()
    this.cy.style()
      .selector('node#one')
        .style({
          'font-family': 'FontAwesome',
          'label': "\uf164",
          'background-image': cat,
          'background-fit': 'contain',
          'text-halign': 'middle',
          'background-color': '#33CC33',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#three')
        .style({
          'background-image': cat,
          'background-fit': 'contain',
          'background-color': '#33CC33',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#two')
        .style({
          'background-color': 'red',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#four')
        .style({
          'background-color': 'red',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#five')
        .style({
          'background-color': '#4194be',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#six')
        .style({
          'background-color': '#4194be',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#seven')
        .style({
          'background-color': '#4194be',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#eight')
        .style({

          'background-color': '#4194be',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#nine')
        .style({
          'background-color': '#4194be',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#ten')
        .style({
          'background-color': 'green',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    this.cy.style()
      .selector('node#eleven')
        .style({
          'background-color': 'green',
          'border-width': '2px',
          'border-color': 'lightgrey',
          'font-size': '7px',
      })
    .update()
    let graph = this.cy
    window.addEventListener('resize', function() {
      graph.fit()
      console.log(graph.nodes().positions(function(node, i) {
        console.log(node.position())
      }))
    }, true)
  }
  render(){
    const elements = [
       { data: { id: 'one', label: 'NODE' }},
       { data: { id: 'two', label: 'NODE' }},
       { data: { id: 'three', label: 'NODE' }},
       { data: { id: 'four', label: 'NODE' }},
       { data: { id: 'five', label: 'NODE' }},
       { data: { id: 'six', label: 'NODE' }},
       { data: { id: 'seven', label: 'NODE' }},
       { data: { id: 'eight', label: 'NODE' }},
       { data: { id: 'nine', label: 'NODE' }},
       { data: { id: 'ten', label: 'NODE' }},
       { data: { id: 'eleven', label: 'NODE' }},
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
      return  <div><div className='cyto-modal'><li>Node 1</li><li>Node 2</li><li>Node 3</li><li>Node 4</li></div><CytoscapeComponent
                className="cytoComp"
                cy={(cy) => { this.cy = cy }}
                elements={elements}
                layout={layout}
                style={{ width: '100%', minHeight: '100vh', backgroundColor: '#e0fbfc' }} />
          </div>;
  }
}

export default CytoscapeGraph;
