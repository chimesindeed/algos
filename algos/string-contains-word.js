// string contains word

function stringContainsWord(string, word){
	string = string.replace(".", " ")

	return string.split(" ").includes(word)
}

console.log(stringContainsWord("now I know my abcs.", "abcs"))


