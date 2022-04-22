function stockItems(item_id, item_name, price, quantity = 0, total = 0, inStock = 10) {
    this.item_id = item_id;
    this.item_name = item_name;
    this.price = price;
    this.quantity = quantity;
    this.total = total;
    this.inStock = inStock;
}

function client(userName, pin) {
    this.userName = userName;
    this.pin = pin;
}

var stock = [];
var cart = [];
var users = []
var orders = [];
var totalOrderAmt = 0;

// creating the stock items OBJECTS.
var toast = new stockItems(1, "Anchovy Toast", 23.00);
var eng_breakfast = new stockItems(2, "English Breakfast", 75.00);
var omelette = new stockItems(3, "Basic Omelette", 32.00);
var muffin = new stockItems(4, "Giant Muffin", 24.00);
var croissant = new stockItems(5, "Croissant", 42.00);
var combo_tram = new stockItems(6, "Combo Tramezzini", 41.00);
var chicken_tram = new stockItems(7, "Chicken Mayo Tramazzeni", 56.00);
var cheese_burger = new stockItems(8, "Cheese Burger", 38.00);
var bacon_cheese_burger = new stockItems(9, "Bacon And Cheese Burger", 54.55);
var mex_pizza = new stockItems(10, "Mexicana Pizza", 98.00);

// Populating the stock[] array with the objects.
stock.push(toast, eng_breakfast, omelette, muffin, croissant, combo_tram, chicken_tram, cheese_burger, bacon_cheese_burger, mex_pizza);

//create the user objects.
var user_1 = new client("Dan Da-man", 1032);
var user_2 = new client("Jannet Sith", 2271);
var user_3 = new client("Zack French", 6769);
var user_test = new client("admin", 1);
//populate the users array
users.push(user_1, user_2, user_3, user_test);


//function to check the user's login.
function User_finder() {
    user_pin = prompt("Please Enter Your Pin \n(or 'x' to EXIT)");
    for (i in users) {
        if (users[i].pin == parseInt(user_pin)) {
            alert("Hello, " + users[i].userName + ".\n" + "Your Order Has Been Placed.");
            return i;
        }
    }
    if (user_pin == "x"){
        alert("Goodbye");
    }
    else {
        alert("INCORRECT");
        User_finder();
    }
}


// function to add/populate the cart[] array with the items/objects selected by the user.
function add_selection(x) {
    if (stock[x].inStock > 0) {
        document.getElementById("total").innerHTML = "";
        stock[x].quantity = stock[x].quantity + 1;
        stock[x].total = stock[x].price * stock[x].quantity;
        totalOrderAmt += stock[x].price;
        stock[x].inStock -= 1;
    }
    cart = [];
    for (var i in stock) {
        if (stock[i].quantity > 0) {
            cart.push(stock[i])
        }
    }
    display_all();
}


//function to remove obects from the cart[] array
function subtract_selection(x) {
    if (stock[x].quantity > 0) {
        stock[x].quantity = stock[x].quantity - 1;
        stock[x].total = stock[x].price * stock[x].quantity;
        totalOrderAmt -= stock[x].price;
        stock[x].inStock += stock[x].quantity;
    }
    cart = [];
    for (var i in stock) {
        if (stock[i].quantity > 0) {
            cart.push(stock[i])
        }
    }
    display_all();
}


var order_number = 1;        //order numbers that will be incremented each time the user presses the 'checkout' button. 
var orders = [];            //cart info is pushed to this array when checked out.
var checkout_list = [];     //a temp array to hold the cart info before it is pushed to the orders array, and the cart is cleared.

//Function to display the cart, and to push the cart items to the orders array.
function displayTotal() {
    if (totalOrderAmt != 0) {
        var login = users[User_finder()].userName

        checkout_list.push("<br>USER: " + login);
        for (i in cart) {
            checkout_list.push("<br>"+ cart[i].quantity + "x " + cart[i].item_name + "\t")
        }
        document.getElementById("total").innerHTML = "<br>ORDER NUMBER: " + order_number +
            "<br>Items:" + checkout_list + "<br/>Total order amount is R" + totalOrderAmt.toFixed(2);
        orders.push("ORDER NO.: " + order_number + " " + checkout_list + "<br> TOTAL: " + totalOrderAmt.toFixed(2) + "<br><br>");
        checkout_list = [];
        order_number += 1;
        cart = [];
        for (i in stock) {
            stock[i].quantity = 0;
            stock[i].total = 0;
            totalOrderAmt = 0;
        }
        display_all();
    }
}


//Displays the orders in the orders array.
function order_history() {
    document.getElementById("total").innerHTML = orders;
}

function display_all() {

    var myTable = "<table><th style='width: 100px; color: black; text-align: right;'>NUM</th>";
    myTable += "<th style='width: 100px; color: black; text-align: right;'>ITEM</th>";
    myTable += "<th style='width: 100px; color: black; text-align: right;'>PRICE</th>";
    myTable += "<th style='width: 100px; color: black; text-align: right;'>QUANTITY</th>";
    myTable += "<th style='width: 100px; color: black; text-align: right;'>TOTAL</th>";
    myTable += "<th style='width: 100px; color: black; text-align: center;'>ADD</th>";
    myTable += "<th style='width: 100px; color: black; text-align: center;'>REMOVE</th>";

    for (i = 0; i < stock.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + stock[i].item_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].item_name + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].price.toFixed(2) + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].quantity + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].total.toFixed(2) + "</td>";
        myTable += "<td style='text-align: center'><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td style='text-align: center'><button onclick='subtract_selection(" + i + ")'>Remove</button></td>";
    }
    myTable += "</table>";

    var myCart = "<cart style='color: black; text-align: left;'>"
    var myCart = "<br/>  YOUR CART  <br/>";
    var emptyCart = "<br>--is empty--<br>"
    if (cart.length == 0) {
        myCart += emptyCart;
    }
    for (var i in cart) {
        myCart += "    " + cart[i].quantity + " x " + cart[i].item_name + "<br>";
    }
    myCart += "<br>TOTAL: " + totalOrderAmt.toFixed(2);
    document.getElementById("total").innerHTML = myCart;
    myCart += "</cart>";
    myTable += "<br/><br/><button onclick='displayTotal()'> CHECKOUT </button>";
    myTable += "\t\t<button onclick='order_history()'>ORDERS HISTORY</button>";

    document.getElementById("demo").innerHTML = myTable;


}
