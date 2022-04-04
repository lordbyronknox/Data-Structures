function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() *
            (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//bubble sort
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}



//function run () {

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());

//}



var arr3 = [10,3,294,2,1,6,32,96,78,12]
var arr2 = [1, 2, 3, 4, 5, 6, 7]
var arr1 = [2, 6, 4, 3, 9, 0, 8]

function sortIt(arr) {
    for (i = 0; i < arr.length; ++i) {
        for (j = i + 1; j < arr.length + 1; ++j) {
            if (arr[i] < arr[j]) {
                x = arr.splice(j, 1);
                arr.splice(i, 0, x[0]);

            }
        }
    }
    console.log(arr)
}

sortIt(arr3)




