const celsiusInput = document.querySelector('#celsius > input');
const ferenheitInput = document.querySelector('#ferenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');



function roundNum(num) {
    return Math.round(num * 100) / 100

}



function celsiusToFerenheigtAndKelvin() {
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = (cTemp + 273.15)
    ferenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);


}

function ferenheitToCelsiusAndKelvin() {


    const fTemp = parseFloat(ferenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * 5 / 9;
    celsiusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);


}


function kelvinToCelsiusAndFerenheit() {


    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9 / 5 * (kTemp - 273) + 32;
    celsiusInput.value = roundNum(cTemp);
    ferenheitInput.value = roundNum(fTemp);
}





function main() {
    celsiusInput.addEventListener('input', celsiusToFerenheigtAndKelvin);
    ferenheitInput.addEventListener('input', ferenheitToCelsiusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelsiusAndFerenheit);
}

main();