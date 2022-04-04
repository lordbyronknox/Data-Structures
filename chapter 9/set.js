function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
   }
   
   function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
    }
    else {
    return false;
    }
   }

   function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
    this.dataStore.splice(pos,1);
    return true;
    }
    else {
    return false;
    }
   }

   function show() {
    return this.dataStore;
   }

  
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
    return true;
    }
    else {
    return false;
    }
   }

   function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
    tempSet.dataStore.push(set.dataStore[i]);
}
}
return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
    tempSet.add(this.dataStore[i]);
    }
    }
    return tempSet;
   }

   function subset(set) {
    if (this.size() > set.size()) {
    return false;
    }
    else {
    for (var member in this.dataStore) {
    if (!set.contains(member)) {
    return false;
    }
    }
    }
    return true;
   }

   function size() {
    return this.dataStore.length;
   }

   function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
    if (!set.contains(this.dataStore[i])) {
    tempSet.add(this.dataStore[i]);
    }
    }
    return tempSet;
   }

   function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
    tempSet.add(this.dataStore[i]);
    }
    }
    return tempSet;
   }
   

 //////////////////////////////////////
   var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
    console.log("Mike added")
}
else {
    console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
var removed = "Mike";
if (names.remove(removed)) {
 console.log(removed + " removed.");
}
else {
 console.log(removed + " not removed.");
}
names.add("Clayton");
console.log(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
 console.log(removed + " removed.");
}
else {
 console.log(removed + " not removed.");
}
//////////////////////////////////////////////
//Example 9-2. Computing the union of two sets
console.log("Example 9.2")


var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
console.log(it.show());
////////////////////////////////////////











//////////vusi's code////////////////
/* Sets */

function mySet() {
    
    this.collection = [];    // the var collection will hold the set
    this.has = has; // this method will check for the presence of an element and return true or false
    this.values = values;   // this method will return all the values in the set
    this.add = add; // this method will add an element to the set
    this.remove = remove;   // this method will remove an element from a set
    this.size = size;   // this method will return the size of the collection
    this.union = union; // this method will return the union of two sets
    this.intersection = intersection;   // this method will return the intersection of two sets as a new set
    this.difference = difference;   // this method will return the difference of two sets as a new set
    this.subset = subset;   // this method will test if the set is a subset of a different set


  function has(element) {
    return this.collection.indexOf(element) !== -1;
  };

  function values() {
    return this.collection;
  };

  function add(element) {
    if (!this.has(element)) {
     this.collection.push(element);
      return true;
    }
    return false;
  };

  function remove(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  function size() {
    return this.collection.length;
  };

  function union(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  function intersection(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  function difference(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  function subset(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}


  var setA = new mySet();
  var setB = new mySet();
  setA.add("a");
  setB.add("b");
  setB.add("c");
  setB.add("a");
  setB.add("d");
  console.log(setA.subset(setB));
  console.log(setA.intersection(setB).values());
  console.log(setB.difference(setA).values());
  console.log(setA.union(setB));
  
  
  var setC = new Set();
  var setD = new Set();
  setC.add("a");
  setD.add("b");
  setD.add("c");
  setD.add("a");
  setD.add("d");
  console.log(setD.values());
  setD.delete("a");
  console.log(setD.has("a"));
  console.log(setD.add("d"));
  