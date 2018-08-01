(function (global, factory) {
  'use strict';
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (factory((global.bootstrap = {}), global.jQuery));
}(this, (function (exports, $) {
  'use strict';

  var config = {
    breakCards: true,
    searchVisible: 0,
    transparent: 0,
    mobile: {
      menu_visible: 0,
      menu_initialized: false,
      toggle_initialized: false,
      bootstrap_nav_initialized: false
    }
  };

  function _init () {
    $('body').bootstrapMaterialDesign();
  }

  function _debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }

  if (document.readyState!='loading') {
    _init();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState=='complete') _init();
    });
  }

})));