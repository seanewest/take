function inject(file) {
  var script = document.createElement("script");
  script.src = chrome.extension.getURL(file);
  document.documentElement.appendChild(script);
}

inject("take_bundle.js");