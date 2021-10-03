// Singly Linked List


// Each element of list will be a Node
class Node {
	constructor(value){
		this.value = value;
		this.next_value = null
	}
}

const node = new Node(4)
console.log(node)
console.log(typeof node)	

function linkedList(){

	let head = tail = null;
	let length = 0; 
	
	return ({
	
		print: function(){
			console.log(`HEAD: ${head}| TAIL: ${tail}| LENGTH: ${length}|`)
		}
	
	})

}

const ll = linkedList();
ll.print() 
