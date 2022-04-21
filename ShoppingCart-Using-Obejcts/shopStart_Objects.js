function stockItems(item_id, item_name, price, quantity = 0, total = 0) {
    this.item_id = item_id;
    this.item_name = item_name;
    this.price = price;
    this.quantity = quantity;
    this.total = total;
}

var stock = [];
var cart = [];
var orders = [];
var totalOrderAmt = 0;

// creating the stock items OBJECTS.
var coke = new stockItems(1, "Anchovy Toast", 23.00);
var kit_kat = new stockItems(2, "English Breakfast", 75.00);
var bar_one = new stockItems(3, "Basic Omelette", 32.00);
var apple = new stockItems(4, "Giant Muffin", 24.00);
var banana = new stockItems(5, "Croissant", 42.00);
var twix = new stockItems(6, "Combo Tramezzini", 41.00);
var bread = new stockItems(7, "Chicken Mayo Tramazzeni", 56.00);
var lettuce = new stockItems(8, "Cheese Burger", 38.00);
var milk = new stockItems(9, "Bacon And Cheese Burger", 54.55);
var chillies = new stockItems(10, "Mexicana Pizza", 98.00);

// Populating the stock[] array with the objects.
stock.push(coke, kit_kat, bar_one, apple, banana, twix, bread, lettuce, milk, chillies);

// function to add/populate the cart[] array with the items/objects selected by the user.
function add_selection(x) {
    document.getElementById("total").innerHTML = "";
    stock[x].quantity = stock[x].quantity + 1;
    stock[x].total = stock[x].price * stock[x].quantity;
    totalOrderAmt += stock[x].price;
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
    for (i in cart) {
        checkout_list.push("<br>" + cart[i].quantity + "x " + cart[i].item_name + "\t")
    }
    document.getElementById("total").innerHTML = "ORDER NUMBER: " + order_number +
        "<br>Items:" + checkout_list + "<br/>Total order amount is R" + totalOrderAmt.toFixed(2);
    orders.push("ORDER NO.: " + order_number + " " + checkout_list + "<br> TOTAL: " + totalOrderAmt + "<br><br>");
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
    // for (var i in orders) {
    document.getElementById("total").innerHTML = orders;
    // }
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
