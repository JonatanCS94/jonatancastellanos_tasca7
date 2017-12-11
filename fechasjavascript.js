function calcularsiglo(a){
   
    if (a>=1700 && a<=1799){
        return 5;
    }
    else if (a>=1800 && a<=1899){
        return 3;
    }
   else if (a>=1900 && a<=1999){
        return 1;
    }
   else if (a>=2000 && a<=2099){
        return 0;
    }
    else if (a>=2100 && a<=2199){
        return -2;
    }
    else if (a>=2200 && a<=2299){
        return -4;
    }

}

function calcularaño(b){

}

function calcularmes(b){


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
function calcularmes (c);