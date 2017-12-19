function calcularsiglo(a){
   b = calcularanyo(b);
    if (b>=1700 && b<=1799){
        return 5;
    }
    else if (b>=1800 && b<=1899){
        return 3;
    }
   else if (b>=1900 && b<=1999){
        return 1;
    }
   else if (b>=2000 && b<=2099){
        return 0;
    }
    else if (b>=2100 && b<=2199){
        return -2;
    }
    else if (b>=2200 && b<=2299){
        return -4;
    }

}

function calcularanyo(b){
var b = calcularanyo(b);
var n = parseInt(b.toString().substr(-2));
var m = n/4;
var o = Math.trunc(m);
var p = n+o;

return p;
}

function calcularmes(c){
var c = calcularmes(c);

    if (c == "enero"){
        return 6;
    }
    else if (c == "febrero"){
        return 2;
    }
    else if (c == "marzo"){
        return 2;
    }
    else if (c == "abril"){
        return 5;
    }
    else if (c == "mayo"){
        return 0;
    }
    else if (c == "junio"){
        return 3;
    }
    else if (c == "julio"){
        return 5;
    }
    else if (c == "agosto"){
        return 1;
    }
    else if (c == "septiembre"){
        return 4;
    }
    else if (c == "octubre"){
        return 6;
    }
    else if (c == "noviembre"){
        return 2;
    }
    else if (c == "diciembre"){
        return 4;
    }
}
function añobisiesto(d){
    var b = calcularanyo(b);
    if (b.toString().substr(-1) == "2" || b.toString().substr(-1) == "4" && d == enero || d == febrero){
       return -1;
    }
    else if (b.toString().substr(-1) == "2" || b.toString().substr(-1) == "4" && d != enero || d != febrero){
        return 0;
    }
}

function dia(e){
    var e = dia(e);
    return e;
    }

function diadelasemana(r){
    var a = calcularsiglo(a);
    var b = calcularanyo(b);
    var c = calcularmes(c);
    var d = añobisiesto(d);
    var e = dia(e);
    var w = a+b+c+d+e;
    var z = w - 7;
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
