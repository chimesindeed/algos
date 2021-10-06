// Setting 2 Pointers Works of Array is Sorted

function sumOfTwoInArray(array, sum){
	let idx1 = 0; let idx2 = array.length -1; // INDEXES


	while(idx1 !== idx2){
		let val1 = array[idx1]; let val2 = array[idx2]; // POINTERS
		if(val1 + val2 === sum) { return true }

		if(val1 + val2 < sum) { 
			console.log(val1);
			console.log(val2)
			idx1 += 1
		}

		if(val1 + val2 > sum) { 
			console.log(val1);
			console.log(val2);
			idx2 -= 1
		}
	}
	return false
}

console.log(sumOfTwoInArray([1,4,5,6], 6))

