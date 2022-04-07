function Dequeue() {
    this.dataStore = [];
    this.enqueuePush = enqueuePush;
    this.dequeueShift = dequeueShift;
    this.denqueuePop = dequeuePop;
    this.enqueueUnshift = enqueueUnshift;
    this.charPop = charPop;
    // this.palindromeTest = palindromeTest;
}
function enqueuePush(element) {     //add element to end
    this.dataStore.push(element);
}
function dequeueShift() {           //remove element from front
    return this.dataStore.shift();
}

function dequeuePop() {      //remove element from end
    this.dataStore.pop();
}
function enqueueUnshift(element) {  //add element from front
    return this.dataStore.unshift(element);
}



function charPop(x) {      //remove element from end
    var word = [this.dataStore[x]];
    console.log(word[0])
    console.log(word[0][0])
    console.log(word.pop())
}



// test program
var q = new Dequeue();
q.enqueuePush("ollo");
q.enqueuePush("anno");
console.log(q.toString());

console.log(q.dataStore[0][0])
q.charPop(0)
// console.log(q.dataStore[0].length-1)
// console.log(q.dataStore[0][q.dataStore[0].length-1])
//q.denqueuePop(0);




/*

var word = "ollo"
for (var i = 0; i < q.dataStore.length; ++i) {
    if (q.dataStore[i] == word) {
        if (q.dataStore[i][0] == q.dataStore[i][q.dataStore[0].length-1]) {
            
            // q.dataStore[i][0].dequeueShift();
            q.dataStore[i][q.dataStore[0].length-1].dequeuePop();
            // console.log(q.dataStore[i])
        }
    }
}


*/

