var xhr = require('xhr');
var _ = require('lodash');

function makeUrl(packageName) {
  var mainUrl = 'http://wzrd.in/bundle/';
  return mainUrl + packageName;
}

function checkForErrors(response, packageName) {
  if (response.status == 500) {
    throw new Error('Module "' + packageName + '" was not found');
  }
}

function syncGet (url) {
  return xhr({
    method: "GET",
    uri: url,
    sync: true
  }, function(e,r,b){/*empty b/c not async*/;});
}

window.take = _.memoize(function(packageName) {
  if (!packageName) {throw new Error('please provide a package name');};
  var url = makeUrl(packageName);
  var response = syncGet(url);
  checkForErrors(response, packageName);
  return eval(response.responseText)(packageName);
});
