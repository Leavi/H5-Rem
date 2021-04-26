/**
 * html节点设置字体大小
 * 由于chromium内核在80以前有最小字号限制，在设备逻辑像素除以设计图宽度后商为小数，所以需要为html节点的字体大小扩大100倍。
 * 此时rem的计算方式就是，用设计图上的尺寸除以100的商便是相应的rem值。
 */
function setRootFontSize() {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 * 100 + 'px'
}
window.addEventListener('resize', setRootFontSize, false)
document.addEventListener('DOMContentLoaded', setRootFontSize, false)