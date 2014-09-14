var obj = {
  ua: navigator.userAgent,
  p: location.pathname,
  ss: window.innerHeight + ' x ' + window.innerWidth,
  ls: (window.localStorage) ? 'true' : 'false'
};

var qs = '',
    arr = [];

for (var d in obj) {
  arr.push(encodeURIComponent(d) + '=' + encodeURIComponent(obj[d]));
}

qs = arr.join('&');

new Image().src = 'http://localhost:4567/create?' + qs;
