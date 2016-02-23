"use strict";

// Word count should be less than 100.
function checkWordCount(str) {
	console.log("checkWordCount");
}

// No duplicate words allowed.
function duplicateCheck(str) {
	console.log("duplicateCheck");
}

// No special characters like $%^&* allowed.
function verifyAlphaNumeric(str) {
	console.log("verifyAlphaNumeric");
}

function validateString() {
	var testStr = document.getElementById("testInput").value;

	if (checkWordCount(testStr) && duplicateCheck(testStr) && verifyAlphaNumeric(testStr)) {
		alert("Test string is valid");
	} else {
		alert("Test string is invalid");
	};
}

document.getElementById("testButton").addEventListener("click", function() {
	validateString();
});
