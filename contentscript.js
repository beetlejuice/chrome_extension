// Works much slower than chrome.tabs.executeScript(), need to optimize
addScript = function(address) {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL(address);
  s.onload = function() {
    s.parentNode.removeChild(s);
  };
  (document.head || document.documentElement).appendChild(s);
};

addScript('scripts/db.js');
addScript('scripts/search.js');