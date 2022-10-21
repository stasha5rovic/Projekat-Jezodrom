
var slika = document.getElementById("mapa");

function uvecaj() {
    slika.style.transform = "scale(2)";
    slika.style.transition = "transform 0.2s easy"
}

function smanji(){
    slika.style.transform = "scale(1)";
    slika.style.transition = "transform 0.2s easy"
}


