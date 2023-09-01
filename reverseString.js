//funktion die String umdreht
const reverseString = function(str) {
    return str.split('').reverse().join('')
};
//String der umgedreht werden soll
const meinString = "hello there"

//Umdrehen des Strings und Ausgabe in der Konsole
const umgedrehterString = reverseString(meinString);
console.log(umgedrehterString);


  