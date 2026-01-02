git # 🔐 Password Generator

Ein eleganter und benutzerfreundlicher **Passwort-Generator**, der sichere, zufällige Passwörter mit einem Klick erstellt.

![Password Generator](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

- 🎲 **Zufallsgenerierung**: Erstellt starke Passwörter mit Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen
- 🎚️ **Anpassbare Länge**: Wähle die Passwortlänge zwischen 8 und 15 Zeichen mit einem interaktiven Slider
- 📋 **Ein-Klick-Kopieren**: Kopiere generierte Passwörter direkt in die Zwischenablage
- 🎨 **Modernes Design**: Schönes, minimalistisches UI mit sanften Animationen und Farbverläufen
- ✅ **Visuelles Feedback**: Icon ändert sich nach erfolgreicher Aktion
- 📱 **Responsive**: Funktioniert auf allen Geräten

---

## 🚀 Demo

Öffne einfach die `Password.html` Datei in deinem Browser und erlebe:

1. **Länge anpassen** mit dem Slider (8-15 Zeichen)
2. **"Generate Password"** klicken
3. **Kopieren-Icon** klicken, um das Passwort zu kopieren

---

## 🛠️ Technologien

| Technologie | Verwendung |
|------------|-----------|
| **HTML5** | Struktur und Layout |
| **CSS3** | Styling, Animationen, Farbverläufe |
| **JavaScript (ES6)** | Logik, DOM-Manipulation, Clipboard API |
| **Unicons** | Icon-Bibliothek |

---

## 📂 Projektstruktur

```
PasswordGenerator/
│
├── Password.html      # Hauptseite
├── Password.css       # Styling und Animationen
├── Password.js        # Passwort-Logik
└── README.md          # Projektdokumentation
```

---

## 🎯 Funktionsweise

### Zeichensätze
```javascript
Kleinbuchstaben: a-z
Großbuchstaben: A-Z
Zahlen: 0-9
Sonderzeichen: !@#$%^&*()_+~`|}{[]:;?><,./-=
```

### Algorithmus
1. Nutzer wählt Passwortlänge mit Slider
2. JavaScript generiert zufällige Indizes
3. Zeichen werden aus allen verfügbaren Zeichensätzen ausgewählt
4. Passwort wird im Textfeld angezeigt
5. Mit Klick auf das Icon wird es in die Zwischenablage kopiert

---

## 💻 Installation & Nutzung

### Lokale Verwendung

1. **Repository klonen**
   ```bash
   git clone https://github.com/freemandjomo/PasswordGenerator
   ```

2. **In das Verzeichnis wechseln**
   ```bash
   cd PasswordGenerator
   ```

3. **Im Browser öffnen**
   - Doppelklick auf `Password.html`
   - Oder mit Live Server in VS Code

### Direkte Nutzung
- Einfach die `Password.html` Datei herunterladen und öffnen
- Keine Installation oder Dependencies erforderlich

---

## 🎨 Design-Highlights

- **Gradient-Hintergrund**: Lila-Blau-Verlauf für moderne Ästhetik
- **Hover-Effekte**: Interaktive Buttons mit sanften Übergängen
- **Active-Animation**: Button-Feedback beim Klicken
- **Icon-Wechsel**: Visuelles Feedback bei erfolgreicher Aktion
- **Slider-Styling**: Angepasster Range-Input mit Akzentfarbe

---

## 🔒 Sicherheitshinweis

Die generierten Passwörter sind für den persönlichen Gebrauch konzipiert und nutzen `Math.random()` von JavaScript. Für extrem sicherheitskritische Anwendungen sollte eine kryptografisch sichere Zufallszahl-Generierung verwendet werden (z.B. `crypto.getRandomValues()`).

---

## 📸 Screenshots

### Main Interface
![QR_Code Generator Interface]()


## 📝 Code-Beispiel

```javascript
// Passwort-Generierung
Generatebtn.onclick = function() {
    let passwordLength = range.value;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    CodeInput.value = password;
}
```

---

## 🤝 Mitwirken

Contributions sind willkommen! Hier sind einige Ideen:

- [ ] Optionen für Zeichensatz-Auswahl hinzufügen
- [ ] Passwort-Stärke-Anzeige implementieren
- [ ] Dark Mode hinzufügen
- [ ] Mehrsprachigkeit (i18n)
- [ ] Passwort-Historie speichern

---

## 📄 Lizenz

Dieses Projekt steht unter der [MIT License](LICENSE).

---

## 👤 Autor

Erstellt mit ❤️ und ☕

---

## 🌟 Unterstützung

Wenn dir dieses Projekt gefällt, gib ihm einen ⭐️ auf GitHub!

---

**Happy Password Generating! 🔐**
