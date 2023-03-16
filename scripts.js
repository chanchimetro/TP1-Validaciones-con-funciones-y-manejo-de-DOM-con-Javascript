
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
        if(document.getElementsByTagName("input")[index].value == "") {
            alert("no");
            return false;
        }
    }
    return true;
}

function sacarPromedio() {
    if(validarForms()){
        var total = 0;
        var div = document.getElementById("resultado");
        for (let index = 0; index < document.getElementsByTagName("input").length; index++) {
            total += Number(document.getElementsByTagName("input")[index].value);
        }
        var promedio = total/document.getElementsByTagName("input").length;
        if (promedio >= 6) {
            div.style.color = "lightgreen";
        } else {
            div.style.color = "red";
        }
        div.innerHTML = promedio;
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
