/* CHAPTER 5

1. Modify the Queue class to create a Deque class. A deque is a queue-like structure
that allows elements to be added and removed from both the front and the back of
the list. Test your class in a program. */



names = [];
names.push("Cynthia");
names.push("Jennifer");
console.log(names);

//Then we can remove the element from the front of the array using shift():
names.shift();
console.log(names);

// Now we’re ready to begin implementing the Queue class by defining the constructor
// function:
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}


//  The enqueue() function adds an element to the END of a queue:
function enqueue(element) {
    this.dataStore.push(element);
}

// The dequeue() function removes an element from the FRONT of a queue:
function dequeue() {
    return this.dataStore.shift();
}

// We can examine the front and back elements of a queue using these functions:
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}

// We also need a toString() function to display all the elements in a queue:
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

// Finally, we need a function that lets us know if a queue is empty:
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}




//**************************** */
// Example 5-1. Queue class definition and a test program.
function Dequeue() {
    this.dataStore = [];
    this.enqueuePush = enqueuePush;
    this.dequeueShift = dequeueShift;
    this.enqueuePop = enqueuePop;
    this.dequeueUnshift = dequeueUnshift;
    this.isPalindrome = isPalindrome;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueuePush(element) {
    this.dataStore.push(element);
}
function dequeueShift() {
    return this.dataStore.shift();
}

function enqueuePop(element) {
    this.dataStore.pop(element);
}
function dequeueUnshift(element) {
    return this.dataStore.unshift(element);
}

function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function isPalindrome(word) {
    var tempArr = [];
    while (word.length > 0) {
        if (word[0] == word[word.length - 1]) {

        }
    }

    // test program
    var q = new Dequeue();
    q.enqueuePush("Meredith");
    q.enqueuePush("Cynthia");
    q.enqueuePush("Jennifer");
    console.log(q.toString());

    // q.enqueuePop();              //remove from end
    // q.enqueuePush("Lilly");      //add to end
    // q.dequeueShift();            //remove from front
    q.dequeueUnshift("Lilly");      //add to front
    console.log(q.toString());




///spitballing
var word = "ollallo"

function isMyPalindrome(word) {
var outers = [];
while (word.length > 1) {
    console.log(word[0] + " " + word[word.length -1]);
    outers += (word[0].Shift() + word[word.length - 1].Pop())
    console.log(outers);
    }
}
}