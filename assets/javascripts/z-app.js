(function (global, factory) {
  'use strict';
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (factory((global.bootstrap = {}), global.jQuery));
}(this, (function (exports, $) {
  'use strict';

  $('body').bootstrapMaterialDesign();

})));