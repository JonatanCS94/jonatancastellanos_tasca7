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

    if (mes == 1){
        return 6;
    }
    else if (mes == 2){
        return 2;
    }
    else if (mes == 3){
        return 2;
    }
    else if (mes == 4){
        return 5;
    }
    else if (mes == 5){
        return 0;
    }
    else if (mes == 6){
        return 3;
    }
    else if (mes == 7){
        return 5;
    }
    else if (mes == 8){
        return 1;
    }
    else if (mes == 9){
        return 4;
    }
    else if (mes == 10){
        return 6;
    }
    else if (mes == 11){
        return 2;
    }
    else if (mes == 12){
        return 4;
    }
}
function añobisiesto(anyo){
    if (anyo%4==0){
        if (mes==1 || mes==2){
            return -1;
        }    
        else{
            return 0;
        }
    }
    else if (anyo%100!=0 && anyo%400==0){
        if (mes==1 || mes==2){
            return -1;
        }    
        else{
            return 0;
        }
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
