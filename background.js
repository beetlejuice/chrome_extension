chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  var tabUrl = details.url;
  if (tabUrl.indexOf('search') > -1) {
    chrome.tabs.executeScript(null, {file: 'scripts/searchfilter.js'}, function() {});
  }
});