// background.js


// Empfängt Nachrichten vom Popup zum Ersetzen von Links
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'replaceLinks' && msg.tabId) {
    chrome.scripting.executeScript({
      target: { tabId: msg.tabId },
      func: replaceAffiliateLinks
    });
  }

});

// Funktion, die in der Seite läuft und Links ersetzt
function replaceAffiliateLinks() {
  // Fest definiertes Produkt (Beispiel-ASIN)
  const produktUrl = "https://www.amazon.de/dp/B08N5WRWNW";
  const affiliateUrl = produktUrl + "/?tag=affiliate-tag-20";

  // Alle <a>-Elemente prüfen
  document.querySelectorAll("a[href]").forEach(a => {
    // Basis-URL (ohne Query-Parameter) extrahieren
    const basis = a.href.split("?")[0];
    if (basis === produktUrl) {
      a.href = affiliateUrl;
    }
  });

  // Optional: Rückmeldung in der Konsole
  console.log("Affiliate-Link ersetzt: ", affiliateUrl);
}

