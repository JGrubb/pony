var obj = {
  ua: navigator.userAgent,
  p: location.pathname,
  h: location.hostname,
  ss: window.innerHeight + ' x ' + window.innerWidth,
  ls: (window.localStorage) ? 'true' : 'false'
};

var qs = '',
    arr = [];

for (var d in obj) {
  arr.push(encodeURIComponent(d) + '=' + encodeURIComponent(obj[d]));
}

qs = arr.join('&');

new Image().src = 'http://lytics.ignoredbydinosaurs.com:4567/create?' + qs;
