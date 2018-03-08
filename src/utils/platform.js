const platform = (() => {
  let ua = navigator.userAgent
  return {
    isWeChat: (/MicroMessenger/ig).test(ua),
    isIphone: (/iphone/ig).test(ua),
    isMac: (/mac/ig).test(ua),
    isAndroid: (/(Android)|(Linux)/ig).test(ua),
    isSafari: (/Safari/ig).test(ua)
  }
})()
export default platform