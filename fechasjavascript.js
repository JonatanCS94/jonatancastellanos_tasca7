function calcularsiglo(a){
   
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
//var b = Math.trunc(ParseInt(b.toString().substr(-2))/4);

var n = ParseInt(b.toString().substr(-2));
var m = n/4;
var o = Math.trunc(m+n);

return o;
}

function calcularmes(c){


    if (b == "enero"){
        return 6;
    }
    else if (b == "febrero"){
        return 2;
    }
    else if (b == "marzo"){
        return 2;
    }
    else if (b == "abril"){
        return 5;
    }
    else if (b == "mayo"){
        return 0;
    }
    else if (b == "junio"){
        return 3;
    }
    else if (b == "julio"){
        return 5;
    }
    else if (b == "agosto"){
        return 1;
    }
    else if (b == "septiembre"){
        return 4;
    }
    else if (b == "octubre"){
        return 6;
    }
    else if (b == "noviembre"){
        return 2;
    }
    else if (b == "diciembre"){
        return 4;
    }
}
function añobisiesto(d){
    if (b.toString().substr(1, 1) == "2" || b.toString().substr(1, 1) == "4" && d == enero || d == febrero){
       return -1;
    }
    else if (b.toString().substr(1, 1) == "2" || b.toString().substr(1, 1) == "4" && d != enero || d != febrero){
        return 0;
    }
}

function dia(e){
    return e;
    }

function diadelasemana(r){
    var w = a+b+c+d+e;
    var z = w - 7;
    return z;
}
