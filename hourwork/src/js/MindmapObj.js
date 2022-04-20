import {Card} from './Card';
import {Node} from './Node';
import {Graph} from './Graph';

export class MindmapObj {
    constructor(dateDue = new Date) {
       this.graph = new Graph();
       // Goal Date for End of Studies
       this.dateDue = dateDue;
       // Structure to hold the deck of cards organized using weights/priority
       this.deck = [];
       this.moveHistory = []; // for previous button
       this.topCard = null;
       this.currentCard = null;
       this.nearestDueDate = dateDue;
    }

    getSize(){
        return this.graph.getSize();
    }
    isEmpty(){
        return this.size == 0;
    }

    // add nodes to graph (+ remove)
    addNode(node){
        this.graph.addVertex(node);
    }
    removeNode(node){
        this.graph.removeVertex(node);
    }
    // add edges b/w nodes (+ remove)
    addEdge(parent, child){
        this.graph.addEdge(parent,child);
    }

    // Gets edges to work with MindMap API
    getEdges(){
        return this.graph.getEdges();
    }
    // gets nodes to work with Mindmap API
    getNodes(){
        return this.graph.getNodes();
    }
    // If given an ID, the card belonging to node with id of x will be returned
    getCardByNodeID(id){
        (this.getNodes()).forEach(element => {
            if(element.getID() === id){
                return element.getCard();
            }
        });
    }

    // Generate deck from graph
    generateDeck(){
        // Clears the deck
        this.deck = this.deck.splice(0,this.deck.length);
        (this.getNodes()).forEach(element => {
            this.putInDeck(element.getCard());
        });
    }

    // Put card back in deck
    putInDeck(card){
        // var position = 0; // calc using date and weight and current size of deck
        // var leftSide = this.deck.splice(0, position);
        // var rightSide = this.deck;
        // standard deck, need to modify to make it more specialized for learning repititions
        this.deck.push(card);
        // combine left and right sides
    }

    // Deque top card from deck
    pullTopCard(){
        this.topCard = this.deck.shift();
    }
    getTopCard(){
        return this.topCard;
    }

    // Retrieves the card currently being targeted 
    getCurrentCard(){
        return this.currentCard;
    }
    // Takes in a card, and sets the current card to be the card passed in
    setCurrentCard(card){
        this.currentCard = card;
    }
   

}
