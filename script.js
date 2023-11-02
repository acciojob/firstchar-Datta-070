function firstChar(text) {
  // your code here
	if(text[0] == " " && text.length > 1)
	return text[1];
}
else{
	return text[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
