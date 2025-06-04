# Gutes tun beim Einkaufen

Eine Browser-Extension (Chrome MV3) als Dummy zum Aktivieren von Spenden über Affiliate-Links.

## Features

* Login (Admin/Admin) im Popup
* Aktivieren/Deaktivieren der Spendenfunktion
* Auswahl einer gemeinnützigen Organisation
* Fortschrittsanzeige (gesammelter Betrag)
* Links zu "Über uns", "Datenschutz" und "Mehr erfahren"
* Index-Seite nach Login mit Partnerübersicht und Spendenchart
* Landing-Page mit Account-Übersicht und Info-Bereichen

## Voraussetzungen

* Chrome oder Edge in Version mit MV3-Unterstützung
* Entwickler-Modus für Erweiterungen aktiviert

## Installation

1. Repository klonen oder als ZIP herunterladen:

   ```bash
   git clone https://github.com/DEIN_USER/GutesTuen.git
   ```
2. Chrome öffnen und `chrome://extensions/` laden.
3. Entwicklermodus einschalten.
4. Auf "Entpackte Erweiterung laden" klicken und Ordner `GutesTuen` auswählen.

## Nutzung

1. Extension-Icon anklicken.
2. Mit **admin/admin** einloggen.
3. Spendenfunktion aktivieren/deaktivieren.
4. Organisation aus Dropdown wählen.
5. Footer-Links öffnen Landing-Page in neuem Tab.

## Ordnerstruktur

```
GutesTuen/
├─ manifest.json       # Manifest V3
├─ popup.html/css/js    # Haupt-Popup mit Login & UI
├─ index.html/css/js    # Erste Seite nach Login
├─ landing.html/css/js  # Info- und Accountbereiche
└─ icons/               # Beispiel-Icons (16/48/128 px)
```

## Anpassung

* Texte in `index.html` oder `landing.html` ändern
* Styles in `.css` anpassen
* Icons in `icons/` ersetzen

---

Kurz, prägnant und einsatzbereit als Dummy-Addon für Tests und Demos.
