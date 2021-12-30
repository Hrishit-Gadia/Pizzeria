menu_list_array = ["Veg Margherita Pizza", "Veg Pizza", "Thin Crust Pizza", "Paneer Pizza", "Vision Time! Special", "Exclusive Cheese Pizza","Neapolitan Pizza", "Chicago Pizza","New York-Style Pizza","Burhanpur's Special","Detroit Pizza","St. Louis Pizza","California Pizza","Greek Pizza"];
rate_list_array = ["150", "200", "175", "225", "300", "275", "200", "350" , "300","400","350","300","400","500"];
cart_list_array = [];
position_list_array = [];
order_Price_array = [];
order_Things_array = [];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    for (i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '   ' + '<div class="rate"> - ' + rate_list_array[i] + '</div>' + '&nbsp; <img src="cart.png" class="cart" onclick="Shop(this.id)" id="' + menu_list_array[i] + '"></li>';
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    //Adding Item
    var item = document.getElementById("add_item").value;
    document.getElementById("add_item").value = "";
    var price = document.getElementById("rate_item").value;
    document.getElementById("rate_item").value = "";
    var rate = price;
    if (item == "") {
        window.alert('Kindly add a name for the pizza');
    }
    else {
        if (item.endsWith("Pizza")) {
            if (menu_list_array.includes(item)) {
                window.alert('This Pizza has already occured, kindly use another Name')
            }
            else {
                menu_list_array.push(item);
                rate_list_array.push(rate);
                htmldata = "<section class='cards'>"
                for (var i = 0; i < menu_list_array.length; i++) {
                    htmldata = htmldata + '<div class="card">' +
                        '<img src="pizzaImg.png">' + menu_list_array[i] + ' - ' + rate_list_array[i] + '</div>'
                }
                htmldata = htmldata + "</section>"
                document.getElementById("display_addedmenu").innerHTML = htmldata;
                getmenu();
            }
        }
        else {
            window.alert('Kindly Add Pizza after the name');
        }
    }
}

function Shop(clicked_id) {
    entity = clicked_id;

    if (cart_list_array.includes(entity)) {
        window.alert('This Pizza is already in your FoodCart, You can increase quantity if you want more!');
    }
    else {
        cart_list_array.push(entity);
        position = menu_list_array.findIndex(checkAge);
        position_list_array.push(position);
        cartdata = "<section class='cards'>"
        for (var i = 0; i < position_list_array.length; i++) {
            cartdata = cartdata + '<div class="card">' +
                '<img src="pizzaImg.png">' + '<p id="I_' + rate_list_array[position_list_array[i]] + '" class="p">' + menu_list_array[position_list_array[i]] + '</p>' + ' - <p id="p_' + rate_list_array[position_list_array[i]] + '" class="p">' + rate_list_array[position_list_array[i]] + '</p> <center><input placeholder="Enter Quantity" class="increase" type="number" value="1" onchange="Quantity(this.id)" id="' + rate_list_array[position_list_array[i]] + '"></center>' +
                '</div>'
        }
        cartdata = cartdata + "</section>"
        document.getElementById("Cart").innerHTML = cartdata;
        window.alert(clicked_id + ' Added to your Cart!');
    }

    test();
}

function checkAge(age) {
    return age == entity;
}

function Quantity(NNumber) {
    new_order = NNumber
    objectmvalue = document.getElementById(new_order).value; //How much u ordered
    orderMaterial = document.getElementById("I_" + new_order).textContent; //What you ordered
    Number(objectmvalue);
    object_value = Math.floor(objectmvalue);
    String(orderMaterial);
    new_order.trim();
    new_currency = object_value * new_order;
    if (order_Things_array.includes(orderMaterial)) {
        market = order_Things_array.findIndex(checkCart);
        order_Price_array[market] = new_currency;
        console.log(order_Things_array, order_Price_array);
        document.getElementById('p_' + NNumber).innerHTML = new_currency;
    }
    else {
        order_Price_array.push(new_currency);
        order_Things_array.push(orderMaterial);
        document.getElementById('p_' + NNumber).innerHTML = new_currency;
    }
}

function checkCart(Value) {
    return Value == orderMaterial
}

function test() {
    for (var e = 0; e < position_list_array.length; e++){
        product_Name = menu_list_array[e];
        localStorage.setItem("Product-Name-"+e, product_Name);
        rate_Name = rate_list_array[e];
        localStorage.setItem("Rate-Name-"+e, rate_Name);
    }
    qwerty = position_list_array.length
    localStorage.setItem("Number", qwerty);
}

