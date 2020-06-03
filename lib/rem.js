function setRootFontSize() {
  document.documentElement.style.fontSize = 20 * document.documentElement.clientWidth / 750 + 'px'
}
window.addEventListener('resize', setRootFontSize, false)
document.addEventListener('DOMContentLoaded', setRootFontSize, false)