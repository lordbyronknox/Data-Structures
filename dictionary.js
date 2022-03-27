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
    for each(var key in Object.keys(this.datastore)) {
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
    foreach(var key in Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}
