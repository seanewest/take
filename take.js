var $ = require('jquery');
var _ = require('lodash');

function makeUrl(packageName) {
  var mainUrl = 'http://wzrd.in/bundle/';
  return mainUrl + packageName;
}

function checkForErrors(response, packageName) {
  if (response.status == 500) {
    throw new Error('Module ' + packageName + ' was not found');
  }
}

function syncGet (url) {
  return $.ajax({
    type: "GET",
    url: url,
    async: false
  });
}

window.take = _.memoize(function(packageName) {
  if (!packageName) {throw new Error('please provide a package name');};
  var url = makeUrl(packageName, packageName);
  var response = syncGet(url);
  checkForErrors(response);
  return eval(response.responseText)(packageName);
});
