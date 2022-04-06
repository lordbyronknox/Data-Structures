/*
3. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
dispenser is filled with red, yellow, and white colors and you don’t like the yellow
ones. Write a program that uses a stack (and maybe more than one) to remove the
yellow ones without changing the order of the other candies in the dispenser. */

function pezPicker(pez) {
    pez_dispenser = pez;
    var scrap = [];
    var keepers = [];
    for (var i = pez_dispenser.length - 1; i >= 0; i--) {
        if (pez_dispenser[i] == 'Y') {
            scrap += pez_dispenser.pop(pez_dispenser[i])
        }
        else {
            keepers += (pez_dispenser.pop(pez_dispenser[i]) + " ")
        }
    }
    keepers = keepers.split(" ");
    for (var j = keepers.length - 1; j >= 0; j--) {
        pez_dispenser += (keepers.pop(keepers[j]) + " ");
    }
    console.log(pez_dispenser)
}

var pez_dispenser = ['Y', 'R', 'W', 'W', 'R', 'W', 'Y', 'Y', 'W', 'W'];
pezPicker(pez_dispenser);


// var pez_dispenser = [];
var pez_dispenser = ('Y R W W R W Y Y W')
var pez_dispenser = pez_dispenser.split(" ")
console.log(pez_dispenser)

var pez_dispenser = ('Y R W W R W Y Y W')
var x = pez_dispenser.split(" ")
console.log(x)



let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray)