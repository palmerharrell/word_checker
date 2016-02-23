"use strict";

function checkWordCount(testStr) {
	var testArray = testStr.split(" ");
	if (testArray.length >= 100) {
		return false;
	} else {
		return true;
	};
}

function duplicateCheck(testStr) {
	var testArray = testStr.split(" ").sort();
	var hasDuplicates = false;
	for (var i = 0; i < testArray.length - 1; i++) {
		if (testArray[i + 1] == testArray[i]) {
      hasDuplicates = true;
		}	
	};
	if (hasDuplicates) {
			return false;
	} else {
		return true;
	};
}

// No special characters like $%^&* allowed.
function verifyAlphaNumeric(testStr) {
	console.log("verifyAlphaNumeric");
}

function validateString() {
	var wordStr = document.getElementById("testInput").value;
	// var wordArray = wordStr.split(" ").sort();
	if (checkWordCount(wordStr) && duplicateCheck(wordStr) && verifyAlphaNumeric(wordStr)) {
		alert("Test string is valid");
	} else {
		alert("Test string is invalid");
	};
}

document.getElementById("testButton").addEventListener("click", function() {
	validateString();
});
