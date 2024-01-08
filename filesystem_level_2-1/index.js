const fs = require('fs');
const data = 'data.json'

// lese JSON-datei aus
fs.readFile('./data.json', (err, buffer) => {
    if(err) return console.log(`Fehler beim Einlesen von ${data}`);

    const jsonContent = buffer.toString();

    // erzeuge txt datei, mit dem Inhalt der JSON-Datei
    fs.writeFile('data.txt', jsonContent, err => {
        if(err) console.log("Erzeugen von data.txt fehlgeschlagen");
    })
})