// Singly Linked List


// Each element of list will be a Node
class Node {
	constructor(value){
		this.value = value;
		this.next_value = "";
	}
}

const node = new Node(4)
console.log(node)
console.log(typeof node)	

function linkedList(){

	let head = tail = "";
	let length = 0; 
	
	
	return ({
	
		amend: function(value){
			const node = new Node(value);
			
			if(length === 0){
				head = tail = node;
				length += 1;
			}
			else {
				tail.next_value = node;
				tail = node;
				length += 1;
				
			}
		
		},
	
		print: function(){ if(length > 0){
			console.log(`HEAD: ${head.value}| HEAD NEXT VALUE: ${head.next_value.value} TAIL: ${tail.value}| LENGTH: ${length}|`)
		
		}
	}
	})

}

const ll = linkedList();
ll.print()
ll.amend(3)
ll.print()
ll.amend(4)

ll.print()
