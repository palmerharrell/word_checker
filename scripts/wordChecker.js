"use strict";

// Word count should be less than 100.
function checkWordCount(testArray) {
	if (testArray.length >= 100) {
		// console.log("checkWordCount: >= 100");
		return false;
	} else {
		// console.log("checkWordCount: < 100");
		return true;
	};
}

// No duplicate words allowed.
function duplicateCheck(testArray) {
	console.log("duplicateCheck");
}

// No special characters like $%^&* allowed.
function verifyAlphaNumeric(TestStr) {
	console.log("verifyAlphaNumeric");
}

function validateString() {
	var wordStr = document.getElementById("testInput").value;
	var wordArray = wordStr.split(" ");
	if (checkWordCount(wordArray) && duplicateCheck(wordArray) && verifyAlphaNumeric(wordStr)) {
		alert("Test string is valid");
	} else {
		alert("Test string is invalid");
	};
}

document.getElementById("testButton").addEventListener("click", function() {
	validateString();
});
