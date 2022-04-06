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

var letters = new Letters();
console.log(letters.makeWord());




/***************************************************************************************/

/* CHAPTER 3

3.1 
Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values.    */
function myList() {
    this.dataStore = [];
    this.listSize = 0;
    this.length = length;
    this.add = add;
    this.insert = insert;
    this.toString = toString;
};

function length() {
    return this.listSize;
}

function add(element) {
    this.dataStore[this.listSize++] = element;
}

function insert(element) {
    for (i = 0; i < this.dataStore.listSize; ++i) {
        if (numbers.dataStore[1] < element) {
            this.add(element);
        }
        break
    }
}


function toString() {
    return this.dataStore;
}

//function run() {
var numbers = new myList()
numbers.add(1);
numbers.add(10);
numbers.add(39);
numbers.add(3);
numbers.add(14);
console.log(numbers.dataStore)
console.log(numbers.dataStore[1])

numbers.insert(200)

console.log(numbers.toString())
//}


/*
3.2 
Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list.  */
function myList() {
    this.dataStore = [];
    this.listSize = 0;
    this.length = length;
    this.add = add;
    this.insert = insert;
    this.toString = toString
};

function length() {
    return this.listSize;
}

function add(element) {
    this.dataStore[this.listSize++] = element;
}

function insert(element) {
    for (i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] < element) {
            console.log("It's not the biggest");
        } else {
            console.log("it IS the biiiigest")//this.add(element);
        }
    }
}

function toString() {
    return this.dataStore;
}

var numbers = new myList()
numbers.add(1);
numbers.add(10);
numbers.add(39);
numbers.add(3);
numbers.add(14);

numbers.insert(300);

console.log(numbers.toString())




/*
3.3 
Create a Person class that stores a person’s name and their gender. Create a list of
at least 10 Person objects. Write a function that displays all the people in the list of
the same gender.    */

function people(name, gender) {
    this.name = name;
    this.gender = gender;
    this.dataStore = [];
    this.listSize = 0;
    this.length = length;
    this.add = add;
    this.insert = insert;
    this.toString = toString
    this.menOrWomen = menOrWomen;
};

function length() {
    return this.listSize;
}

function add(element1, element2) {
    this.dataStore[this.listSize++] = [element1, element2];
}

function insert(element) {
    for (i = 0; i < this.dataStore.listSize; ++i) {
        if (this.dataStore[i] < element) {
            this.add(element);
            break
        }
    }
}

function toString() {
    return this.dataStore;
}

function menOrWomen(sex) {
    if (sex == 'M') {
        console.log(men.toString());
    }
    else
        console.log(women.toString());
}

var men = new people();
var women = new people();
men.add("Adrian", 'M');
men.add("Jake", 'M');
men.add("Dan", "Brown");
men.add("Philip", 'M');
men.add("Erick", 'M');
men.add("Zane", "M");
women.add("Anna", "F");
women.add("Jen", "F");
women.add("Becky", 'F')
women.add("Cathy", "F");

menOrWomen('M');
menOrWomen('F')




/*
3.4
Modify the video-rental kiosk program so that when a movie is checked out it is
added to a list of rented movies. Display this list whenever a customer checks out
a movie.    */

function checkOut(movieName) {
    if (availableMovies.contains(movieName)) {
        rentedMovies.append(movieName);
        availableMovies.remove(movieName);
        console.log(movieName + " is rented out.");
    } else {
        console.log(movieName + " is not available.");
    }
}
//3_5


function returnMovie(movieName) {
    if (rentedMovies.contains(movieName)) {
        availableMovies.append(movieName);
        rentedMovies.remove(movieName);
        console.log(movieName + " was returned.");
    } else {
        console.log("Sorry, the film " + movieName + " is not ours.");
    }
}

var availableMovies = new List();
for (var i = 0; i < movies.length; i++) {
    availableMovies.append(movies[i]);
}
var rentedMovies = new List();

function run() {
    checkOut("12 Angry Men");
    returnMovie("12 Angry Men");
}





/***************************************************************************************/

/* CHAPTER 4

1. A stack can be used to ensure that an arithmetic expression has balanced paren‐
theses. Write a function that takes an arithmetic expression as an argument and
returns the postion in the expression where a parenthesis is missing. An example
of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
* .24.  */
// Function to check if brackets are balanced
// Function to check if brackets are balanced
function areBracketsBalanced(expr) {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {   // Traversing the Expression
        let x = expr[i];
        if (x == '(' || x == '[' || x == '{') {   // Push the element in the stack
            stack.push(x);
            continue;
        }
        if (stack.length == 0)  // If current character is not opening bracket, then it must be closing. So stack cannot be empty at this point.
            return false;
        let check;

        if (x == ')') {
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
        }
        if (x == '}') {
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
        }
        if (x == ']') {
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }

    return (stack.length == 0); // Check Empty Stack
}


let expr = "([{}])";
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");


/*
2. A postfix expression evaluator works on arithmetic expressions taking the following
form:
op1 op2 operator
Using two stacks — one for the operands and one for the operators — design and
implement a JavaScript function that converts infix expressions to postfix expressions, 
and then use the stacks to evaluate the expression.  (eg:    ((x+y)*z)    -->    xy + z* )                     */
// x + y = z    operand: x and y       operators: + and =
// infix: the placement of operators (eg: **) between operands (ie. 2 ** 4 = 16).
// postfix: the operand comes after the operand (i++)   -   this returns i before incrementing.
// prefix: the operand comes before the operand (++i)    -   this return i after incrementing. 


//*********************************WORK IN PROGRESS********************************************* */

function in_to_postFix(expression) {
    var operandStack = [];
    var operatorStack = [];
    for (var i = 0; i < expression.length; ++i) {
        console.log(expression[i]);
        if (expression[i] == '(' || expression[i] == ')'
            || expression[i] == '+' || expression[i] == '-'
            || expression[i] == '*' || expression[i] == '/') {
            operatorStack.push(expression[i]);
        }else{
            operandStack.push(expression[i])
        }
    }
    console.log(operatorStack)
    console.log(operandStack)
}


in_to_postFix('(1+2)*3')

////code from the web............/////////////////////

var stackarr = [];      // Created an empty array
var topp = -1;          // Variable topp initialized with -1

// Push function for pushing elements inside stack
function push(e) {
	topp++;
	stackarr[topp] = e;
}

// Pop function for returning top element
function pop() {
	if (topp == -1)
		return 0;
	else {
		var popped_ele = stackarr[topp];
		topp--;
		return popped_ele;
	}
}

// Function to check whether the passed character is operator or not
function operator(op) {
	if (op == '+' || op == '-' ||
		op == '^' || op == '*' ||
		op == '/' || op == '(' ||
		op == ')') {
		return true;
	}
	else
		return false;
}

// Function to return the precedency (BODMAS) of operator (precedency: which operator goes first... ie, * is calculated before +)
function precedency(pre) {
	if (pre == '@' || pre == '(' || pre == ')') {
		return 1;
	}
	else if (pre == '+' || pre == '-') {
		return 2;
	}
	else if (pre == '/' || pre == '*') {
		return 3;
	}
	else if (pre == '^') {
		return 4;
	}
	else
		return 0;
}

// Function to convert Infix to Postfix
function InfixtoPostfix(expression) {
	var postfix = [];       	
	var temp = 0;
	push('@');
	infixval = expression;
	
	for (var i = 0; i < infixval.length; i++) {     // Iterate on infix string
		var el = infixval[i];
		if (operator(el)) {                         // Checking whether operator or not
			if (el == ')') {
				while (stackarr[topp] != "(") {
					postfix[temp++] = pop();
				}
				pop();
			}
			
			else if (el == '(') {                   // Checking whether el is ( or not
				push(el);
			}
			else if (precedency(el) > precedency(stackarr[topp])) {     // Comparing precedency of el and stackarr[topp]
				push(el);
			}
			else {
				while (precedency(el) <=
					precedency(stackarr[topp]) && topp > -1) {
					postfix[temp++] = pop();
				}
				push(el);
			}
		}
		else {
			postfix[temp++] = el;
		}
	}
	while (stackarr[topp] != '@') {     	// Adding character until stackarr[topp] is @
		postfix[temp++] = pop();
	}
	var st = "";                            // String to store postfix expression
	for (var i = 0; i < postfix.length; i++)
		st += postfix[i];

	// To print postfix expression in console
	console.log(st)
}

InfixtoPostfix((1+2)*3)





/*
3. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
dispenser is filled with red, yellow, and white colors and you don’t like the yellow
ones. Write a program that uses a stack (and maybe more than one) to remove the
yellow ones without changing the order of the other candies in the dispenser. */

function pezPicker(pez) {
    pez_dispenser = pez;
    var scrap = [];
    var keepers = [];
    for (var i = pez_dispenser.length - 1; i >= 0; i--) {
        if (pez_dispenser[i] == 'Y') {
            scrap += pez_dispenser.pop(pez_dispenser[i])
        }
        else {
            keepers += (pez_dispenser.pop(pez_dispenser[i]) + " ")
        }
    }
    keepers = keepers.split(" ");
    for (var j = keepers.length - 1; j >= 0; j--) {
        pez_dispenser += (keepers.pop(keepers[j]) + " ");
    }
    console.log(pez_dispenser)
}

var pez_dispenser = ['Y', 'R', 'W', 'W', 'R', 'W', 'Y', 'Y', 'W', 'W'];
pezPicker(pez_dispenser);




/***************************************************************************************/

/* CHAPTER 5

1. Modify the Queue class to create a Deque class. A deque is a queue-like structure
that allows elements to be added and removed from both the front and the back of
the list. Test your class in a program. */
function Dequeue() {
    this.dataStore = [];
    this.enqueuePush = enqueuePush;
    this.dequeueShift = dequeueShift;
    this.enqueuePop = enqueuePop;
    this.dequeueUnshift = dequeueUnshift;
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

// test program
var q = new Dequeue();
q.enqueuePush("Meredith");
q.enqueuePush("Cynthia");
q.enqueuePush("Jennifer");
console.log(q.toString());

// q.enqueuePop();
// q.enqueuePush("Lilly");
// q.dequeueShift();
q.dequeueUnshift("Lilly");
console.log(q.toString());





/*
2. Use the Deque class you created in Example 5-1 to determine if a given word is a
palindrome.     */







3. Modify the priority queue example from Example 5-5 so that the higher-priority
elements have higher numbers rather than lower numbers. Test your implementa‐
tion with the example in the chapter.


4. Modify the ED example (Example 5-5) so the user can control the activity in the
ED. Create a menu system that allows the user to choose from the following activ‐
ities:
a. Patient enters ED.
b. Patient is seen by doctor.
c. Display list of patients waiting to be seen. 



/***************************************************************************************/
/* CHAPTER 6

1. Implement the advance(n) function so that when executed, the current node is
moved n nodes forward in the list.

2. Implement the back(n) function so that when executed, the current node is moved
n spaces backward in the list.

3. Implement the show() function, which displays the data associated with the current
node.

4. Write a program that uses a singly linked list to keep track of a set of test grades
entered interactively into the program.

5. Rewrite your solution to Example 6-4 using a doubly linked list.

6. According to legend, the first-century Jewish historian Flavius Josephus was about
to be captured along with a band of 40 compatriots by Roman soldiers during the
Jewish-Roman War. The Jewish soldiers decided that they preferred suicide to being
captured and devised a plan for their demise. They were to form a circle and kill
every third soldier until they were all dead. Josephus and one other decided they
wanted no part of this and quickly calculated where they needed to place themselves
so they would be the last survivors. Write a program that allows you to place n
people in a circle and specify that every mth person will be killed. The program
should determine the number of the last two people left in the circle. Use a circularly
linked list to solve the problem. 






/***************************************************************************************/
/* CHAPTER 7

1. Write a program that takes a set of names and phone numbers from a text file and
stores them in a Dictionary object. Include in your program the ability to display
one phone number, display all phone numbers, add new phone numbers, remove
phone numbers, and clear out the list of numbers.

2. Using the Dictionary class, write a program that stores the number of occurrences
of words in a text. Your program should display each word in a text just once as
well as the number of times the word occurs in the text. For example, given the text
“the brown fox jumped over the blue fox,” the output will be:
the: 2
brown: 1
fox: 2
jumped: 1
over: 1
blue: 1

3. Rewrite exercise 2 so that it displays the words in sorted order.

/***************************************************************************************/
/* CHAPTER 8

1. Use linear probing to create a simple dictionary to store the definitions of words.
Your program should have two parts. The first part reads a text file that contains a
list of words and definitions and stores them in a hash table. The second part of the
program allows a user to enter a word and see the definition of that word.

2. Repeat exercise 1 using separate chaining.

3. Write a program using hashing that reads a text file and compiles a list of the words
in the file with the number of times each word appears in the file. */
