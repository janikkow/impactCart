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

// Führt das Ersetzen automatisch nach jedem vollständigen Seitenaufruf aus
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.storage.sync.get('active', d => {
      if (shouldReplaceLinks(d.active, tab.url, 'https://www.amazon.de/')) {
        chrome.scripting.executeScript({
          target: { tabId },
          func: replaceAffiliateLinks
        });
      }
    });

// Helper function to determine if links should be replaced
function shouldReplaceLinks(active, url, prefix) {
  return active && url && url.startsWith(prefix);
}
  }
});

// Funktion, die in der Seite läuft und Links ersetzt
function replaceAffiliateLinks() {
  // Fest definierter Test-Link
  const produktUrl =
    "https://www.amazon.de/Anker-Powerbank-Powerstation-Solargenerator-Lieferumfang/dp/B0D62PMB3R/";
  const affiliateUrl = produktUrl + "?tag=affiliate-tag-20";

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

