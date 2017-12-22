function calcularsiglo(anyo){

    if (anyo>=1700 && anyo<=1799){
        return 5;
    }
    else if (anyo>=1800 && anyo<=1899){
        return 3;
    }
    else if (anyo>=1900 && anyo<=1999){
        return 1;
    }
    else if (anyo>=2000 && anyo<=2099){
        return 0;
    }
    else if (anyo>=2100 && anyo<=2199){
        return -2;
    }
    else if (anyo>=2200 && anyo<=2299){
        return -4;
    }

}

function calcularanyo(anyo){

var n = parseInt(anyo.toString().substr(-2));
var m = n/4;
var o = Math.trunc(m);
var p = n+o;

return p;
}

function calcularmes(mes){

    if (mes == "enero"){
        return 6;
    }
    else if (mes == "febrero"){
        return 2;
    }
    else if (mes == "marzo"){
        return 2;
    }
    else if (mes == "abril"){
        return 5;
    }
    else if (mes == "mayo"){
        return 0;
    }
    else if (mes == "junio"){
        return 3;
    }
    else if (mes == "julio"){
        return 5;
    }
    else if (mes == "agosto"){
        return 1;
    }
    else if (mes == "septiembre"){
        return 4;
    }
    else if (mes == "octubre"){
        return 6;
    }
    else if (mes == "noviembre"){
        return 2;
    }
    else if (mes == "diciembre"){
        return 4;
    }
}
function añobisiesto(anyo){
    if (anyo.toString().substr(-1) == "2" || anyo.toString().substr(-1) == "4" && mes == "enero" || mes == "febrero"){
       return -1;
    }
    else {
        return 0;
    }
}

function diadelasemana(resultado){
    var a = calcularsiglo(anyo);
    var b = calcularanyo(anyo);
    var c = calcularmes(mes);
    var d = añobisiesto(anyo);
    var e = parseInt(dia);
    var w = a+b+c+d+e;
    var z = w % 7;

    if (z == 0){
        return "domingo";
    }
    else if (z == 1){
        return "lunes";
    }
    else if (z == 2){
        return "martes";
    }
    else if (z == 3){
        return "miércoles";
    }
    else if (z == 4){
        return "jueves";
    }
    else if (z == 5){
        return "viernes";
    }
    else if (z == 6){
        return "sábado";
    }
}
