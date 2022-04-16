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
