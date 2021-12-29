Names_array = [""];
Price_array = [""];
Value = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",];
var CheckData = "";
rupees= 0;

function Test() {
  xyz = localStorage.getItem('Number');
    for (var e = 0; e < xyz; e++) {
        Names = localStorage.getItem("Product-Name-" + e);
        PriceTime = localStorage.getItem("Rate-Name-" + e)
        Names_array.push(Names);
        Price_array.push(PriceTime);
    }

    for (var e = 0; e < Names_array.length; e++) {
        CheckData = CheckData + " <p><a> " + Names_array[e] + "</a> <span class='price'>" + Price_array[e] + "</span></p>";
      hello =  Number(Price_array[e]);
        rupees = rupees + hello;
    }
    document.getElementById("Objects").innerHTML = CheckData;
    document.getElementById('Amount').innerHTML = xyz;
    document.getElementById('paying').innerHTML = rupees;
}