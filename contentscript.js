// Works much slower than chrome.tabs.executeScript(), need to optimize
var s = document.createElement('script');
s.src = chrome.extension.getURL('scripts/search.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function() {
  s.parentNode.removeChild(s);
};