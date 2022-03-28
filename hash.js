function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}

function put(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

//Example 8-1. Hashing using a simple hash function
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}

hTable.showDistro();

//////////////////////////

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}



////////

//We now present a new, better hash function utilizing Horner’s method:
function betterHash(string, arr) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % arr.length;
    return parseInt(total);
}




//////////////better code...////////////

//Example 8-2. The HashTable class with the betterHash() function
function HashTable() {
    this.table = new Array(137);
    //this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

function get(key) {
    return this.table[this.betterHash(key)];
}

function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

/*function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}   */

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}


//Example 8-3. Testing the betterHash() function
function myFunction() { //to run the code in html (button)
    var someNames = ["David", "Jennifer", "Donnie", "Raymond",
        "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    var hTable = new HashTable();
    for (var i = 0; i < someNames.length; ++i) {
        hTable.put(someNames[i]);
    }



    hTable.showDistro();
}





//////////////////Hashing Integer Keys//////////////////////
//Example 8-4. Hashing integer keys
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for (var j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log("Student data: \n");
for (var i = 0; i < students.length; ++i) {
    console.log(students[i].substring(0, 8) + " " +
        students[i].substring(9));
}

console.log("\n\nData distribution: \n");
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
    hTable.put(students[i]);
}
hTable.showDistro();




//////////////////////Storing and Retrieving Data in a Hash Table///////////////
function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
}

function get(key) {
    return this.table[this.betterHash(key)];
}

/*  !!!!!!!!!!!!!!!!!!!!this block of code doesn't work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Here is a program to test the put() and get() functions:

var pnumbers = new HashTable();
var names, number;
for (var i = 0; i < 3; i++) {
    names = prompt("Enter a name (space to quit): ");
    number = prompt("Enter a number: ");
}

names = "";
console.log("Name for number (Enter quit to stop): ");
while (names != "quit") {
    if (names == "quit") {
        break;
    }
    console.log(names + "'s number is " + pnumbers.get(names));
    console.log("Name for number (Enter quit to stop): ");
}

*/



////////////////Handling Collisions//////////////////////
//Separate Chaining

function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}
////////////////////////////example//////////////////////////////

function HashTable() {
    this.table = new Array(137);
    this.values = [];
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.buildChains = buildChains;
    this.put = put;
    this.get = get;
}

function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function get(key) {
    return this.table[this.betterHash(key)];
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}


function betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

// Handling Collisions
// Separate Chaining
function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}

var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}

hTable.showDistro();

function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if (this.table[pos][index] == undefined) {
        this.table[pos][index + 1] = data;
    }
    else {
        while (this.table[pos][index] != undefined) {
            ++index;
        }
        this.table[pos][index] = data;
    }
}

function get(key) {
    var index = 0;
    var hash = this.betterHash(key);
    if (this.table[pos][index] = key) {
        return this.table[pos][index + 1];
    }
    else {
        while (this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index + 1];
    }
}

// Linear Probing
function put(key, data) {
    var pos = this.betterHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    }
    else {
        while (this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }
}

function get(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}

/////////////////////////////////////////////////////////
//---------vusi's code------------------
class HashTable {
    constructor() {
        this.table = [];
    }

    modularHash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % 71;

        return hash;
    }

    put(key, value) {
        let hash = this.modularHash(key);

        if (this.table[hash] === undefined) {
            this.table[hash] = [];
        }

        return this.table[hash].push([key, value]);
    }
    get(key) {
        let hash = this.modularHash(key);

        for (let i = 0; i < this.table[hash].length; i++) {
            if (this.table[hash][i][0] === key) {
                return this.table[hash][i][1];
            }
        }

        return undefined;
    }

    remove(key) {
        return delete this.table[this.modularHash(key)];
    }


}

function run() {
    const hashTable = new HashTable();
    hashTable.put("Jared Nielsen", "@jarednielsen");
    hashTable.put("NASA", "@nasa");
    hashTable.put("ASAN", "@asan");
}
