'use strict';

  /* ^^^
  * Viewport Height Correction
  *
  * @link https://www.npmjs.com/package/postcss-viewport-height-correction
  * ========================================================================== */
function setViewportProperty(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

  /* ^^^
  * Полифил для NodeList.forEach(), на случай если забыл про IE 11
  *
  * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
  * ========================================================================== */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

  /* ^^^
  * JQUERY Actions
  * ========================================================================== */
$(function() {

  $.exists = (selector) => $(selector).length > 0;

  var isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1,
      isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Mobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  $(window).on('resize', function(){
    isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Mobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  })

  //=require ../_blocks/**/*.js

});
