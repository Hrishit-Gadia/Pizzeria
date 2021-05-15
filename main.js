var Names =
    ["Me", "My Mother", "My Father", "My Brother", "My GrandParents"];

var Images =
    ["Me Clipart.png",
        "Mom Clipart.jpeg",
        "Dad Clipart.jpeg",
        "Brother Clipart.jpeg",
        "Grandparents.png",];

var i = 0;
function Update() {
    i++;
    if (i > 4) {
        i = 0;
    }
    var NewImage = Images[i];
    var NewName = Names[i];
    document.getElementById("Picture").src = NewImage;
    document.getElementById("Relation").innerHTML = NewName;
}