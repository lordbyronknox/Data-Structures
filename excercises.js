// CHAPTER 2
/* 
2.1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average. */

function grades() {
    this.gradesList = [];
    this.add = add;
    this.average = average;
}

function add(gradeScore) {
    this.gradesList.push(gradeScore);
}

function average() {
    var total = 0;
    for (var i = 0; i < this.gradesList.length; ++i) {
        total += this.gradesList[i];
    }
    return total / this.gradesList.length;
}

var studentA = new grades();
studentA.add(80);
studentA.add(63);
studentA.add(52);


/*
2.2. Store a set of words in an array and display the contents both forward and backward.   */

function concat(accumulatedString, item) {
    return accumulatedString + item;
}

var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduceRight(concat);


/* 
2.3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly aver‐
age, a specific week’s average, and all the weeks’ averages. */

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}


function add(temp) {
    this.dataStore.push(temp);
}


function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore[0].length; ++i) {
        total += this.dataStore[0][i];
    }
    return total / this.dataStore[0].length;
}


function averageWeeks() {
    allWeeks = ['Week 1: ' + week1.average().toFixed(),
    'Week 2: ' + week2.average().toFixed(),
    'Week 3: ' + week3.average().toFixed(),
    'Week 4: ' + week4.average().toFixed()];
    for (i = 0; i < allWeeks.length; ++i) {
        console.log(allWeeks[i])
    }
}

function averageMonth() {
    var one = week1.average()
    var two = week2.average()
    var three = week3.average()
    var four = week4.average()
    total = (one + two + three + four) / 4
    return "Avg temp for the month was " + total.toFixed() + " degrees."
}


var week1 = new weekTemps();
week1.add([52, 55, 61, 65, 55, 50, 30]);

var week2 = new weekTemps();
week2.add([21, 25, 21, 25, 25, 20, 20]);

var week3 = new weekTemps();
week3.add([22, 27, 26, 25, 20, 21, 18]);

var week4 = new weekTemps();
week4.add([18, 19, 21, 20, 18, 17, 16]);



console.log(week1.average())
averageWeeks()
console.log(averageMonth())



/*
2.4. Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word. */

function Letters() {
    this.letterStore = ['a', 'l', 'g', 'o', 'r', 'i', 't', 'h', 'm', 's'];
    this.makeWord = function () {
        return this.letterStore.join('');
    }
}




/***************************************************************************************/

/* CHAPTER 3

3.1 
Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values.    */





/*
3.2 
Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list.  */


/*
3.3 
Create a Person class that stores a person’s name and their gender. Create a list of
at least 10 Person objects. Write a function that displays all the people in the list of
the same gender.    */

/*
3.4
Modify the video-rental kiosk program so that when a movie is checked out it is
added to a list of rented movies. Display this list whenever a customer checks out
a movie.    */


/*
3.5
Create a check-in function for the video-rental kiosk program so that a returned
movies is deleted from the rented movies list and is added back to the available
movies list */


