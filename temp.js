//Funktion von Fahrenheit in Celsius
function FtC(Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9;
}

//Funktion von Celsius in Fahrenheit

function CtF(Celsius) {
    return (Celsius * 9 / 5) + 32;
}

// Ausgabe der Umwandlung

console.log(FtC(32));
console.log(CtF(0));
