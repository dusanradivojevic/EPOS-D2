function pripremiFormu() {
    isprazniBox(true);
    resetujPolja();
    sakrijBox(true); //box upozorenja ako je nesto nepravilno uneto
}

function isprazniBox() {
    document.getElementById("greska").innerHTML = "Forma sadrži sledeće greške: <br>";
}

function resetujPolja() {
    document.forms[0].brTel.style.border = "1px solid grey";
    document.forms[0].mail.style.border = "1px solid grey";
    document.forms[0].adresa.style.border = "1px solid grey";
    document.forms[0].vrstaKvara.style.border = "1px solid grey";

}

function sakrijBox(param) {
    if (param == true) {
        document.getElementById("greska").style.visibility = "hidden";
    } else {
        document.getElementById("greska").style.visibility = "visible";
    }
}
function popuniBox(param) {
    sakrijBox(false);
    document.getElementById("greska").innerHTML += param;
    document.getElementById("greska").innerHTML += "<br>";
}
function validacija() {
    var greska = false;
    isprazniBox();

    if (!proveriradio(document.forms[0].vrstaKvara)) {
        popuniBox('Niste selektovali vrstu kvara!');
        greska = true;
    }
    if (document.forms[0].adresa.value == '') {
        popuniBox("Niste uneli adresu!");
        document.forms[0].adresa.style.border = "1px solid red";
        document.forms[0].adresa.focus();
        greska = true;
    }
    if (document.forms[0].mail.value == '') {
        popuniBox("Niste uneli e-mail adresu!");
        document.forms[0].mail.style.border = "1px solid red";
        document.forms[0].mail.focus();
        greska = true;
    }
    if (document.forms[0].mail.value.indexOf('@') == -1) {
        popuniBox("Niste uneli e-mail adresu u odgovarajucem formatu!");
        document.forms[0].mail.style.border = "1px solid red";
        document.forms[0].mail.focus();
        greska = true;
    }

    if (greska == true) {
        return false;
    } else {
        return true;
    }
}

function proveriradio(dugmici) {
    for (var i = 0; i < dugmici.length; i++) {
        if (dugmici[i].checked) return true;
    }
    return false;
}



