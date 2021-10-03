// string contains word

//function stringContainsWord(string, word){
//	string = string.replace(".", " ")

//	return string.split(" ").includes(word)
//}

// console.log(stringContainsWord("now I know my abcs.", "abcs"))



// Better Space Complexity -- stored word instead of entire array O(1)
function stringContainsWord(string, word){
	string = string.concat(" ")
	
	let start = 0;
	
	for(let i = 0; i < string.length; i++){
	
		if(string[i]  === " "){
			let cWord = string.slice(start, i);
			console.log(cWord);	
			if(cWord === word){return true}
			start = i + 1
		}
	} 

	return false
}

console.log(stringContainsWord("now I know my abcs","abcs"))
