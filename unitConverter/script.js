let inputValue = 10;
let milesToKm = true;
let result = 0;
if (milesToKm){
    

    result = inputValue * 1.60934;

}else{  

    result = inputValue / 1.60934;

}

const resulString = `El valor ingresado es ${inputValue} y la conversion es: ${result}`;

console.log(resulString);


function react(){
    const resultElement = document.getElementById('resulteElement'); resultElement.innerHTML = resulString;
}
function nuevo(){
    document.getElementById('resulteElement').innerHTML = 'Conversion';
}