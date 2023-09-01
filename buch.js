// hier werden die Bücherdaten gespeichert
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
        title: 'Bald kann ich JavaScript',
        author: 'Arberat Dushi'
    }
  ]
// Funktion zum auswählen der Büchertitel und Autoren aus books
function getTheTitlesAndAuthors(books) {
    return {
        titles: books.map(book => book.title),
        authors: books.map(book => book.author)
    }
}
// Ausgabe der Büchertitellen und Autoren aus books
const result = getTheTitlesAndAuthors(books);
console.log(result.titles);  // Gibt die Titel aus
console.log(result.authors); // Gibt die Autoren aus