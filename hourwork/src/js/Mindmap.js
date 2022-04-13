class Mindmap {
    constructor(title = "", dateDue = new Date) {
       this.title = title;
       this.graph = new Graph();
       // Goal Date for End of Studies
       this.dateDue = dateDue;
       // Array of Nodes with the highest weight/priority
       this.topNodes = [];
       // Structure to hold the deck of cards organized using weights/priority
       this.deck = [];
       this.nearestDueDate = dateDue;

       // tracks currently selected node in mindmap
       this.selectedNode = null;
    }
   
    // ----  Title
    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title = title;
    }

    // ----  Graph
    getSize(){
        return this.graph.getSize();
    }
    isEmpty(){
        return getSize() == 0;
    }


    getNodes(){
        return this.graph.getNodes();
    }
    addNode(node){
        return this.graph.addVertex(node);
    }
    removeNode(node){
        return this.graph.removeVertex(node);
    }


    getEdges(){
        return this.graph.getEdges();
    }
    addEdge(node1, node2){
        return this.graph.addEdge(node1, node2);
    }
    removeEdge(node1, node2){
        return this.graph.removeEdge(node1, node2);
    }


    
    // ---- Selected Node in Mindmap Feature
    getSelectedNode(){
        return this.selectedNode;
    }
    setSelectedNode(node){
        this.selectedNode = node;
    }


   

}
