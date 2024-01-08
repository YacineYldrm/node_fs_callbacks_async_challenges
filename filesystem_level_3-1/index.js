// - Erstelle mithilfe des Node.js Filesystems einen Unterordner innerhalb deines Projektordners. In diesem Ordner soll die Datei später angelegt werden.
// - Schreibe eine Funktion, die einen Parameter annimmt.
// - Diese soll prüfen, ob die txt-Datei bereits existiert. Wenn dies nicht der Fall ist, soll sie erstellt werden.
// - In die Datei soll der Inhalt des Parameters geschrieben werden. Denk daran, diesen auch mitzuliefern, wenn du die Funktion aufrufst.
// - Existiert die Datei bereits? Dann füge der bereits bestehenden Datei den Inhalt des Parameters in einer neuen Zeile hinzu.

const fs = require('fs');

// erszeuge Ornder, falls ordner nicht existiert
if(!fs.existsSync('./subfolder')) {
    fs.mkdir("./subfolder", err => {
        if(err) return console.log("Erstellen des Ordners fehlgeschlagen");
    });
};

// überprüfe ob Datei existiert
const checkIfFileExist = (fileContent) => {
    const file = "datei.txt";
    
    // wenn datei nicht existiert, erzeuge datei. sonst ergänze datei-inhalt.
    !fs.existsSync(`./subfolder/${file}`) ? fs.writeFile(`./subfolder/${file}`, fileContent, err => {
        if(err) console.log(`Erzeugen von ${file} fehlgeschlagen`);
    }) : fs.appendFile(`./subfolder/${file}`, `\n${fileContent}`, err => {
        if(err) console.log(`Beschreiben von ${file} fehlgeschlagen`);
    });
}

checkIfFileExist("Hello World");