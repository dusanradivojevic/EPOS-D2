function prikaziSat() {
    var datum = new Date();
    var h = datum.getHours();
    var m = datum.getMinutes();
    var s = datum.getSeconds();

    document.getElementById("sat").textContent = h + ":" + m + ":" + s;

    setTimeout(prikaziSat(), 1000); //vrti ga na svaku sekundu
}