class stock_item {
    constructor(stock_id, stock_name, price) {
        this.stock_id = stock_id;
        this.stock_name = stock_name;
        this.price = price;
    }
}

class cart_item {
    constructor(id, description, quantity) {
        this.id = id;
        this.description = description;
        this.quantity = quantity
    }
}

// class order_item {
//     constructor(order_id, stock_id, quantity) {
//         this.order_id = order_id;
//         this.stock_id = stock_id;
//         this.quantity = quantity;
//     }
// }

let items = [  // populate items array with objects
    new stock_item(1, "Coke", 7.5),
    new stock_item(2, "KitKat", 7.5),
    new stock_item(3, "Fanta", 7.5),
    new stock_item(4, "BarOne", 7.5),
    new stock_item(5, "Sprite", 7.5),
    new stock_item(6, "Lunchbar", 7.5),
    new stock_item(7, "Stoney", 7.5),
    new stock_item(8, "Tex", 7.5),
    new stock_item(9, "iron brew", 7.5),
    new stock_item(10, "5 Star", 7.5)
];

let cart = [];

function add_selection(i) { // populate cart  array with objects?
    if (cart.length == 0) {
        cart.push(new cart_item(items[i].stock_id, items[i].stock_name, 1));
        display_all();
        return;
    } else { // check every element in the cart for increasing
        for (j = 0; j < cart.length; j++) {
            if (cart[j].id == items[i].stock_id) { // found it, increase the quantity by 1
                cart[j].quantity += 1;
                display_all();
                return;
            }
        }
        cart.push(new cart_item(items[i].stock_id, items[i].stock_name, 1));
    }
    display_all();
    return;
}

function subtract_selection(x) {
// reverse of add_selection
}

function displayTotal() {

    document.getElementById("total").innerHTML = "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}

function display_all() {

    var myTable = "<table><th style='width=50%; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";


    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + items[i].stock_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i].stock_name + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i].price + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td></tr>";
    }

    myTable += "</table><br><h1>Cart :</h1>";

    var myCart = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Subtract</th>";


    for (i = 0; i < cart.length; i++) {
        myCart += "<tr><td style='width: 100px; text-align: right;'>" + cart[i].id + "</td>";
        myCart += "<td style='width: 100px; text-align: right;'>" + cart[i].description + "</td>";
        myCart += "<td style='width: 100px; text-align: right;'>" + cart[i].quantity + "</td>";
        myCart += "<td><button onclick='subtract_selection(" + i + ")'>Subtract</button></td></tr>";
    }

    myCart += "</table>";

    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";
    // document.write(myTable);

    document.getElementById("demo").innerHTML = myTable;
    document.getElementById("cart").innerHTML = myCart;

}

window.onload = function () {
    display_all();
}
