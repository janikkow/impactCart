# Impact Cart – Gutes tun beim Einkaufen

Diese Erweiterung demonstriert, wie man beim Online-Shopping automatisch Spenden über Affiliate-Links generieren kann. Sie basiert auf Manifest V3 und funktioniert in Chrome oder Edge. Alle Oberflächen sind statisch und dienen als Prototyp für Tests und Demos.

## Funktionsübersicht

- **Login im Popup**: Einfacher Login mit `admin/admin`.
- **Spenden aktivieren**: Ein Schalter ermöglicht das Einschalten der Link-Ersetzung. Wird ein unterstützter Shop geöffnet, ersetzt die Erweiterung Produktlinks durch Affiliate-Links.
- **Organisation wählen**: Im Popup kann eine NGO ausgewählt werden. Die Wahl wird im Speicher abgelegt.
- **Fortschritt verfolgen**: Gesammelte Beträge werden in einer Fortschrittsleiste sowie im Dashboard angezeigt.
- **Dashboard und Infoseiten**: Nach dem Login steht ein Dashboard (`index.html`) mit Chart sowie mehrere Informationsseiten (`landing.html`, `about.html`, `datenschutz.html`, `impressum.html`) zur Verfügung.

## Voraussetzungen

- Chrome oder Edge mit MV3-Unterstützung
- Entwicklermodus für Erweiterungen aktiviert

## Installation

1. Repository klonen oder als ZIP herunterladen
   ```bash
   git clone <dieses-repo>
   ```
2. Browser öffnen und `chrome://extensions/` aufrufen
3. Entwicklermodus aktivieren
4. Auf **Entpackte Erweiterung laden** klicken und den Projektordner auswählen

## Nutzung

1. Auf das Erweiterungssymbol klicken und mit **admin/admin** anmelden
2. Spendenfunktion aktivieren
3. Eine Organisation auswählen
4. Die automatische Ersetzung von Links durch Affiliate-Versionen wird aktuell als Backend-Funktion entwickelt
5. Über **Dashboard öffnen** gelangt man zum Hauptbereich der Erweiterung

## Projektstruktur

```
impactCart/
├─ manifest.json       # Manifest V3 der Erweiterung
├─ popup.html/.css/.js # Login und Hauptbedienung
├─ index.html/.css/.js # Dashboard mit Fortschrittsanzeige und Chart
├─ landing.html        # Allgemeine Informationen und Account-Bereich
├─ about.html          # Hintergrund zum Projekt
├─ datenschutz.html    # Datenschutzhinweise (Platzhalter)
├─ impressum.html      # Rechtliche Angaben (Platzhalter)
├─ login.html/.js      # Alternative Login-Seite
├─ background.js       # Ersetzt Links in aktiven Tabs
├─ common.js           # Gemeinsame Hilfsfunktionen
└─ weitere Assets wie CSS und Bilder
```

## Anpassung

- Inhalte der HTML-Dateien können beliebig geändert werden
- Styles befinden sich in `style.css` bzw. `landing.css`
- Die Logik zum Ersetzen der Links liegt in `background.js` und kann angepasst werden

---

Dieses Projekt ist ein statischer Prototyp. Er veranschaulicht die grundsätzliche Funktionsweise eines Spenden-Addons im Rahmen der Modularbeit digitale Geschäftsmodelle.

