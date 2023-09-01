//Funktion zum Entfernen mehrerer Elemente aus einem Array
function removeFromArray(arr, ...args) {
    
    // Durchlaufen der Argumente die entfernt werden sollen
    args.forEach(function(item) {

        // Finden des Index des aktuellen Elements im Array
const index = arr.indexOf(item);


// Falls gefunden, Element entfernen
if (index !== -1) {
    arr.splice(index, 1);
}
});

// Rückgabe des aktualisierten Arrays
return arr;
}

// Aufrufen der Funktion + Auswahl des zu entfernenden Elementes
const result = removeFromArray(["Hans", "Achim", "Paul", "Johannes", "Franz"], "Paul");
console.log(result);