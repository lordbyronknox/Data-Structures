/*
3. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
dispenser is filled with red, yellow, and white colors and you don’t like the yellow
ones. Write a program that uses a stack (and maybe more than one) to remove the
yellow ones without changing the order of the other candies in the dispenser. */


var pez_dispenser = ['Y', 'R', 'W', 'W', 'R', 'W', 'Y', 'Y', 'W'];
var scrap = [];
var keeperIt = [];
for (var i = pez_dispenser.length - 1; i >= 0; i--) {
    if (pez_dispenser[i] == 'Y') {
        scrap += pez_dispenser.pop(pez_dispenser[i])
    }
    else {
        keeperIt += (pez_dispenser.pop(pez_dispenser[i]))
    }
}
for (var j = keeperIt.length - 1; j >= 0; j--) {
    if (keeperIt[i] == keeperIt.length) {
        console.log(keeperIt[i])
        // pez_dispenser += (keeperIt.pop(keeperIt[i]) + ', ');
    }
    
}

console.log(scrap)
console.log(keeperIt.length)
console.log(pez_dispenser)

