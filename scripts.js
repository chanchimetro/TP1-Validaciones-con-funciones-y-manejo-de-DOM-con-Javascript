
function validarNota(id) {
    var nota = document.getElementById(id).value;
    if(nota>=1 && nota<=10) {
        document.getElementById(id).style.color = "lightgreen";
        
    } else {
        document.getElementById(id).style.color = "red";
        
    }
}

function validarForms() {
    for (let index = 0; index < document.getElementsByTagName("input").length; index++) {
        if(document.getElementsByTagName("input")[index].value == "" || document.getElementsByTagName("input")[index].value > 10 || document.getElementsByTagName("input")[index].value < 1) {
            alert("Porfavor complete todos los campos copn valores válidos (1 a 10).");
            return false;
        }
    }
    return true;
}

function imprimirNotas() {
    var liMate = document.getElementById("limatematica").innerHTML;
    document.getElementById("limatematica").innerHTML = liMate + document.getElementById("matematica").value;
    var liLengua = document.getElementById("lilengua").innerHTML;
    document.getElementById("lilengua").innerHTML = liLengua + document.getElementById("lengua").value;
    var liEfsi = document.getElementById("liefsi").innerHTML;
    document.getElementById("liefsi").innerHTML = liEfsi + document.getElementById("efsi").value;
}

function sacarPromedio() {
    if(validarForms()){
        var total = 0;
        var div = document.getElementById("resultado");
        var img = document.getElementById("img");
        for (let index = 0; index < document.getElementsByTagName("input").length; index++) {
            total += Number(document.getElementsByTagName("input")[index].value);
        }
        var promedio = total/document.getElementsByTagName("input").length;
        if (promedio >= 6) {
            div.style.color = "lightgreen";
            img.setAttribute("src", "imgs/monkey-success.gif");
        } else {
            div.style.color = "red";
            img.setAttribute("src", "imgs/monkey-failure.gif");
        }
        div.innerHTML = promedio;
        imprimirNotas();
    }
}

function sacarMayorNota() {
    if(validarForms()) {
        var formArray = document.getElementsByTagName("input");
        var notaMax = 0;
        for (let index = 0; index < formArray.length; index++) {
            if (formArray[index].value > notaMax) notaMax = formArray[index].value;
        }
        
    }
}
