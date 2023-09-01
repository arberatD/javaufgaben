// Dieser Code wurde ehrlicherweise von CGPT geschrieben!


let firePosition = 1;

// Die Ausgabe von spinChamber ist eine "randome" Zahl und kann als Parameter an die Funktion fireGun übergeben werden.
const spinChamber = () => {
  // Hier generieren wir eine Zufallszahl zwischen 1 und 6
  return Math.floor(Math.random() * 6) + 1;
};

// fireGun prüft ob die Zahl aus spinChamber mit der Zahl aus firePosition übereinstimmt, falls JA return "Du bist 🔫" falls NEIN return "Spiel weiter 🎲".
const fireGun = (bulletPosition) => {
  // Überprüfen, ob bulletPosition gleich firePosition ist
  if (bulletPosition === firePosition) {
    return "Du bist 🔫";
  } else {
    return "Spiel weiter 🎲";
  }
};

console.log(fireGun(spinChamber()));
