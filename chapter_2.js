console.log("--Triange Start--")

for (var index = 0; index < 7; index++) {
    console.log("#".repeat(index + 1));
}

console.log("--Triange End--")

console.log("--ABC Start--")

var abc = "abc";

console.log(abc.length);

console.log("--ABC End--")

console.log("--FizzBuzz Start--")

for (var index = 0; index < 100; index++) {
    if (((index + 1) % 3 == 0) && ((index + 1) % 5 == 0)) {
        console.log("FizzBuzz");
    }else if ((index + 1) % 3 == 0) {
        console.log("Fizz");
    } else if ((index + 1) % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(index + 1);
    }
}

console.log("--FizzBuzz End--")

console.log("--ChessBoard Start--")

do {
    var width = Number(prompt("What is the width of the board?"));
    var height = Number(prompt("What is the size of the board?"));
} while (isNaN(width) || isNaN(height));

var chess_line = "";

for (var index = 0; index < width; index++) {
    chess_line += (index % 2 == 0) ? "#" : " ";
}

for (var index = 0; index < height; index++) {
    if (index % 2 == 0) {
        console.log(chess_line);
    } else {
        console.log(chess_line.split("").reverse().join(""));
    }
}

console.log("--ChessBoard End--")