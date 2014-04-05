var $ = require('jquery');

window.take = function(packageName) {
  if (!packageName) {throw new Error('please provide a package name');};

  var url = 'http://wzrd.in/bundle/' + packageName;
  var code = $.ajax({
    type: "GET",
    url: url,
    async: false
  }).responseText;

  var result = eval(code)(packageName);
  console.log(packageName + " loaded");

  return result;
}
