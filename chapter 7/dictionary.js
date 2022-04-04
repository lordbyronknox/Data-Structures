
// We’ll start our definition of the Dictionary class with this code:
function Dictionary() {
    this.datastore = new Array();
}

//The first function to define is add(). This function takes two arguments, a key and a
//value. The key is the index for the value element. Here is the code:
function add(key, value) {
    this.datastore[key] = value;
}

//Next, we define the find() function. This function takes a key as its argument and
//returns the value associated with it. The code looks like this:
function find(key) {
    return this.datastore[key];
}

//Removing a key-value pair from a dictionary involves using a built-in JavaScript 
//function: delete. This function is part of the Object class and takes a reference to a key as
//its argument. The function deletes both the key and the associated value. Here is the
//definition of our remove() function:
function remove(key) {
    delete this.datastore[key];
}

//Finally, we’d like to be able to view all the key-value pairs in a dictionary, so here
// is a function that accomplishes this task:
function showAll() {
    for (const key of Object.keys(this.datastore)) {
        print(key + " -> " + this.datastore[key]);
    }
}


/////////////////////////////////////////////

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}
function add(key, value) {
    this.datastore[key] = value;
}
function find(key) {
    return this.datastore[key];
}
function remove(key) {
    delete this.datastore[key];
}
function showAll() {
    for (const key of Object.keys(this.datastore))
        console.log(key + " -> " + this.datastore[key]);
}


var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();




////////////////////Auxiliary Functions for the Dictionary Class///////

//We can define several functions that can help in special situations. For example, it is
//nice to know how many entries there are in a dictionary. Here is a count() function
//definition:
function count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

//You might be wondering why the length property wasn’t used for the count() function.
//The reason is that length doesn’t work with string keys. For example:
var nums = new Array();
nums[0] = 1;
nums[1] = 2;
console.log(nums.length); // displays 2


var pbook = new Array();
pbook["David"] = 1;
pbook["Jennifer"] = 2;
console.log(pbook.length); // displays 0


//Another helper function we can use is a clear() function. Here’s the definition:
function clear() {
    for (var key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}


//Example 7-3. Updated Dictionary class definition
function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key of Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    var n = 0;
    for (var key of Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}



//Example 7-4 illustrates how these new auxiliary functions work.
//Example 7-4. Using the count() and clear() functions
function myFunction () {
var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());
}


//Adding Sorting to the Dictionary Class
var a = new Array();
a[0] = "Mike";
a[1] = "David";
console.log(a); // displays Mike,David
a.sort();
console.log(a); // displays David,Mike

function showAll() {
    for (var key of Object.keys(this.datastore).sort()) {
    console.log(key + " -> " + this.datastore[key]);
    }
   }


