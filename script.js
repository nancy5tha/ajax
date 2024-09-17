function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "data.txt", true);
    xhttp.send();
}
let likeCount = 0;

function incrementLike() {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
}
