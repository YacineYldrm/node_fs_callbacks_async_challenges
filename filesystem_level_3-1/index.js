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
        err && console.log(`Erzeugen von ${file} fehlgeschlagen`);
    }) : fs.appendFile(`./subfolder/${file}`, `\n${fileContent}`, err => {
        err && console.log(`Beschreiben von ${file} fehlgeschlagen`);
    });
}

checkIfFileExist("Hello World");