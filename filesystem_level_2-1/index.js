const fs = require('fs');
const jsonData = 'data.json'
const txtData = 'data.txt'

// lese JSON-datei aus
fs.readFile(`./${jsonData}`, (err, buffer) => {
    if(err) return console.log(`Fehler beim Einlesen von ${jsonData}`);

    const jsonContent = buffer.toString();

    // erzeuge txt datei, mit dem Inhalt der JSON-Datei
    fs.writeFile(`./${txtData}`, jsonContent, err => {
        if(err) console.log(`Erzeugen von ${txtData} fehlgeschlagen`);
    })
})