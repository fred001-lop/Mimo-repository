let inputValue = 10;
let milesToKm = false;

if (milesToKm){
    result = 0;

    result = inputValue * 1.60934;

}else{  

    result = inputValue / 1.60934;

}

const resulString = `El valor ingresado es ${inputValue} y la conversion es: ${result}`;

console.log(resulString);