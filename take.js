var $ = require('jquery');

function makeUrl(packageName, version) {
  var mainUrl = 'http://wzrd.in/bundle/';
  var versionUrlSegment = version ? "@" + version : "";
  return mainUrl + packageName + versionUrlSegment;
}

function checkForErrors(packageName, version) {
  if (!packageName) {throw new Error('please provide a package name');};

}

function syncGet(url) {
  return $.ajax({
    type: "GET",
    url: url,
    async: false
  });
}

window.take = function(packageName, version) {
  checkForErrors(packageName, version);
  var url = makeUrl(packageName, version);
  var response = syncGet(url);
  return eval(response.responseText)(packageName);
}
