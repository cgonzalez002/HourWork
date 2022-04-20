import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Mindmap} from './MindmapComponent.js';

// Imports for Object JS classes
import {Card} from './js/Card';
import {Node} from './js/Node'
import {Graph} from './js/Graph';
import {MindmapObj} from './js/MindmapObj';

// START IDs from 0
var g = new Graph();
var card1 = new Node(0, new Card("Capital", "Place in a State where the government is housed"));
var card2 = new Node(1, new Card("Capital of MA", "Boston"));
var card3 = new Node(2, new Card("Capital of RI", "Providence"));
var card4 = new Node(3, new Card("Capital of CT", "Hartford"));
var card5 = new Node(4, new Card("Capital of VT", "Burlington"));


var mm = new MindmapObj( new Date("11/26/2023"));


// connects cards to the capital card
var cards = [card1, card2, card3, card4, card5];
for(var i = 0; i < 6; i++){
    mm.addNode(cards[i]);
    if(i > 0) mm.addEdge(card1, cards[i]);
}

// adds a random edge from capital of MA
mm.addEdge(card2, new Node(5, new Card("Population", "500")));

mm.generateDeck();
mm.pullTopCard();

console.log(mm);

const App = () => {
  // Renders MindMap from the MindMapComponent
 
  function Flashcard(){
    // React formatting
    return (
      <div>
        <h1>Flashcard</h1>
      </div>
    );
  
  }


  function MindMap(){
    // allows for callback from MindmapComponent js file
    const [node, setNode] = useState('No Node Selected');
    // returns formatted React
    return (
      <div>
        <Mindmap nodes={mm.getNodes()} adjacent={mm.getEdges()} sendBackNode={node => setNode(node)}  />
        <h4>{node}</h4>
      </div>
    );
  }


  return (
    <div>
      <MindMap />
    </div>
  );
}


const root = createRoot(document.getElementById("root"));
root.render(<App />);


