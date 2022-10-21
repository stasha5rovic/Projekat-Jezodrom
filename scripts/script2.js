

$("#posalji").on("click", function() {
    let ime = document.getElementById("ime").value;
    let tekst = 'Hvala, ' + ime + ', što ste posetili naš sajt!';
    alert(tekst);
})