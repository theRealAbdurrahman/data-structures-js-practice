// creating the LL
//this is the constructor function for the LL; it has no params and head and tail are null because it's empty; we shall add nodes to head and tail using other methods;
function LinkedList() {
    this.head = null;
    this.tail = null;
}

//TODO
// interface node = {
//  elementData,
//  next,
//  prev,
// }

// constructor function for the Node
// it should take the element as a param, and point to the next node and the prev by taking them as next and prev params.. if it's the head the prev will be null, and if it's the tail the next will be null and i should tell TS this but i don't remember how.
function LinkedNode(elementData: any, next?: any, prev?: any) {
    this.elementData = elementData; // this is the actual element we want to save in the LL
    this.next = next; // pointer to the next node
    this.prev = prev; // pointer to the prev node

}

// creating the first node.. here the prev is null because it's the first node
var node1 = new LinkedNode(100, 'node2', null)
console.log(node1);



// addToHead

LinkedList.prototype.addToHead = function (elementData) { // passing the elementData here cause we gonna use it as the value param for the new Node instance

    // creating a new node that is gonna be used as the head
    let newNode = new LinkedNode(elementData, this.head, null); // the next param is the old head cause it's gonna br the first node.

    if (this.head) this.head.prev = newNode; // if there is a head i.e the list is not empty make the prev of the head equals the new node
    else this.tail = newNode; // else: the head and tail should be pointing to the ONLY node that we are creating rn;

    this.head = newNode; // and in any cases the head should be the new node and the head pointer should point to it not the old head. 
}
