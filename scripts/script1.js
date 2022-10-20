
var slika1 = document.getElementById("slika1");
var slika2 = document.getElementById("slika2");
var slika3 = document.getElementById("slika3");

function uvecaj() {
    slika1.style.transform = "scale(2)";
    slika1.style.transition = "transform 0.2s"
}

function smanji(){
    slika1.style.transform = "scale(1)";
    slika1.style.transition = "transform 0.2s"
}


