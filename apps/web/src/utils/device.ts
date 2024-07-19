export const isSafari = () => {
  let sBrowser;
  const sUsrAg = navigator.userAgent;
  // The order matters here, and this may report false positives for unlisted browsers.

  if (sUsrAg.indexOf('Firefox') > -1) {
    sBrowser = 'Mozilla Firefox';
    // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
  } else if (sUsrAg.indexOf('SamsungBrowser') > -1) {
    sBrowser = 'Samsung Internet';
  } else if (sUsrAg.indexOf('Opera') > -1 || sUsrAg.indexOf('OPR') > -1) {
    sBrowser = 'Opera';
  } else if (sUsrAg.indexOf('Trident') > -1) {
    sBrowser = 'Microsoft Internet Explorer';
  } else if (sUsrAg.indexOf('Edge') > -1) {
    sBrowser = 'Microsoft Edge';
  } else if (sUsrAg.indexOf('Chrome') > -1) {
    sBrowser = 'Google Chrome or Chromium';
  } else if (sUsrAg.indexOf('Safari') > -1) {
    sBrowser = 'Apple Safari';
  } else {
    sBrowser = 'unknown';
  }
  return sBrowser === 'Apple Safari';
};

export const isWechat = () => {
  return /MicroMessenger/i.test(window.navigator.userAgent);
};
