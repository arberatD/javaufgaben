//erstellt die function repeatString 
function repeatString(string, num) {
  return num >= 0 ? string.repeat(num) : 'Ungültige Anzahl';
}

console.log(repeatString('hey', 3));
// Gibt heyheyhey aus