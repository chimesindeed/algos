// string contains word

function stringContainsWord(string, word){

	return string.split(" ").includes(word)
}

console.log(stringContainsWord("now I know my abcs.", "abcs"))


