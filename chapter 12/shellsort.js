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
    this.gaps = [5,3,1];
    this.shellsort = shellsort;
    this.shellsort1 = shellsort1;
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


function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] &&
                this.dataStore[j - this.gaps[g]] > temp;
                j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}

function shellsort1() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h];
                j -= h) {
                swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
}

function setGaps(arr) {
    this.gaps = arr;
   }

  function run() { 
   var nums = new CArray(10);
   nums.setData();
   document.write("Before Shellsort: \n" + nums.toString());

   nums.shellsort();
   document.write("\nAfter Shellsort: \n" + nums.toString());
   }



   
/*   console.log("-----------------------------------------")

var nums = new CArray(100);
nums.setData();
console.log("Before Shellsort1: \n");
console.log(nums.toString());
nums.shellsort1();
console.log("\nAfter Shellsort1: \n");
console.log(nums.toString());
*/