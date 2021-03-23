// create a Function that takes 2 integers as arguments, and returns the multiplied value of the two numbers

// this function multiplies the 2 numbers in the round brackets together
// Note: I suck at naming things, so Ima just be lazy with the naming
function multiply(number, number2) {
    var multipliedNumber = number * number2;
    return multipliedNumber;
}

// this variable will be iterated on the console
var multiplied = multiply(8, 2);
console.log(multiplied);

// test 2 other times:
multiplied = multiply(10, 5);
console.log(multiplied);

multiplied = multiply(2, 1);
console.log(multiplied);

// create a Function that states whether a string is > 10 characters or not
// this function counts the number of characters there are within the string's legth, and states wheither it's true or false that the string has more then 10 characters in it
function charCheck(string) {
    if (string.length > 10) {
        return true;
    } else if (string.length < 10){
        return false;
    } else {
        console.log("something went wrong");
    }
}

// these variables help activate the function
var characters = "checkString";
var checking = charCheck(characters)
console.log(checking);
// note: still suck at naming

// test 2 other times:
checking = charCheck("something");
console.log(checking);

checking = charCheck("this is a long sentence");
console.log(checking);

// filler space to see stuff
console.log("filler Space");

// create a Function that looks at an array of strings, but only logs the string that start with "ph" in the begining to the console
// [weird function but OKAY!]

// this is an array of sentences, only one starts with "Ph"
var sentences = [
    "This sentence is false",
    "WHY, WHY AM I LIKE THIS?",
    "Phantom Thieves",
    "Filler Sentence"
];

function isItPh(letters) {
    if (string.startsWith(letters) ) {
        return true
    } else if (!string.startsWith(letters) ) {
        return false
    }
}

for (var i = 0; i < sentences.length; i++) {
    var sentenceCheck = sentences[i].isItPh('Ph')
    console.log(sentenceCheck);
}