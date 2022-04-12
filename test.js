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
    document.write("<br>We swap index " + index2 + " and index " + index1 + " around.")
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    document.write("<br>Here's what the array looks like now: " + arr + "<br>");
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
    document.write("We compare the value in the first index with the value in the middle index of the array...<br> and if the second index is smaller we swap them around.<br> We keep the same gap between the indexes and we move up one index position. When we get to the end of the array we reduce the gap by one and repeat the process.<br>");
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                document.write("<br>" + "COMPARING INDEX " + (j-h) + " and " + j + "<br>Index " + (j-h) + " = " + this.dataStore[j-h] + "<br>"
                + "Index "+ j + " = " + this.dataStore[j])
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
   document.write("Before Shellsort: \n" + nums.toString() + "<br><br>");

   nums.shellsort1();
   document.write("<br>After Shellsort: \n" + nums.toString());
   }











