Names_array = [""];
Price_array = [""];
Value = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",];
var CheckData = "";

function Test() {
  xyz = localStorage.getItem('Number');
    for (var e = 0; e < Value.length; e++) {
        Names = localStorage.getItem("Product-Name-" + e);
        PriceTime = localStorage.getItem("Rate-Name-" + e)
        Names_array.push(Names);
        Price_array.push(PriceTime);
    }

    for (var e = 0; e < Names_array.length; e++) {
        CheckData = CheckData + " <p><a> " + Names_array[e] + "</a> <span class='price'>" + Price_array[e] + "</span></p>";
    }
    document.getElementById("Objects").innerHTML = CheckData;
}