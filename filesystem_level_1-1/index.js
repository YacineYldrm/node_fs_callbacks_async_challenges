const fs = require('fs');

// datei auslesen
fs.readFile('blog1.txt', function(err, buffer) {
    if(err) return console.log("Fehler beim Einlesen von blog1.txt", err);

    const info = buffer.toString();
    const result = info.replace(info, "Ich bin Webdeveloper");
    const textFile = "blog1.txt";
    
    // datei inhalt überschreiben
    fs.writeFile(textFile, result, function(err){
        if(err) return console.log(`Fehler beim Schreiben von ${textFile}`, err);

    });
});

const fileContent = "Ich wurde neu erzeugt";
const newTextFile = "blog2.txt";

// erzeuge neue .txt datei mit beliebigem Inhalt
fs.writeFile(newTextFile, fileContent, function(err) {
    if(err) return console.log(`Fehler beim Erzeugen von ${newTextFile}`, err);
});

const assetsFolder = "assets";

// überprüfen, ob assets Ordner existiert
if (fs.existsSync(`./${assetsFolder}`)) {

    // assets Ordner löschen
    fs.rmdir(`./${assetsFolder}`, (err) => {
        if(err) return console.log("Löschen des Ordners fehlgeschlagen");
    });
};

// neuen assets Ordner erzeugen
fs.mkdir(`./${assetsFolder}`, (err) => {
    if(err) return console.log(`Fehler beim Versuch den Ordner ./${assetsFolder} zu erzeugen`);
});

// überprüfe ob delete.txt existiert
if (fs.existsSync("delete.txt")) {
    const fileContent = "Ich wurde neu erzeugt";
    // lösche delete.txt
    fs.unlink("delete.txt", (err) => {
        if(err) return console.log(`Löschen von delete.txt fehlgeschlagen`);
    });
};

fs.writeFile("./delete.txt", fileContent, function(err) {
            if(err) return console.log(`Erstellen von delete.txt fehlgeschlagen`); 
        }) 

// erzeuge "Hello.txt" datei
fs.writeFile("Hello.txt", "Hello World", function(err) {
    if(err) return console.log(`Erstellen von Hello.txt fehlgeschlagen`);
});

// nenne datei um
if(fs.existsSync("Hello.txt")) {
    fs.rename("Hello.txt", "HelloWorld.txt", (err) => {
        if(err) return console.log("Umbennen von datei fehlgeschlagen");
    })
}
