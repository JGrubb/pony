var obj = {
  ua: navigator.userAgent,
  p: location.pathname,
  h: location.hostname,
};

var qs = '',
    arr = [];

for (var d in obj) {
  arr.push(encodeURIComponent(d) + '=' + encodeURIComponent(obj[d]));
}

qs = arr.join('&');

new Image().src = '/call?' + qs;
