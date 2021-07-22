(self["webpackChunk"] = self["webpackChunk"] || []).push([["search"],{

/***/ "./assets/js/jquery.instantSearch.js":
/*!*******************************************!*\
  !*** ./assets/js/jquery.instantSearch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/**
 * jQuery plugin for an instant searching.
 *
 * @author Oleg Voronkovich <oleg-voronkovich@yandex.ru>
 * @author Yonel Ceruto <yonelceruto@gmail.com>
 */
(function ($) {
  'use strict';

  String.prototype.render = function (parameters) {
    return this.replace(/({{ (\w+) }})/g, function (match, pattern, name) {
      return parameters[name];
    });
  }; // INSTANTS SEARCH PUBLIC CLASS DEFINITION
  // =======================================


  var InstantSearch = function InstantSearch(element, options) {
    this.$input = $(element);
    this.$form = this.$input.closest('form');
    this.$preview = $('<ul class="search-preview list-group">').appendTo(this.$form);
    this.options = $.extend({}, InstantSearch.DEFAULTS, this.$input.data(), options);
    this.$input.keyup(this.debounce());
  };

  InstantSearch.DEFAULTS = {
    minQueryLength: 2,
    limit: 10,
    delay: 500,
    noResultsMessage: 'No results found',
    itemTemplate: '\
                <article class="post">\
                    <h2><a href="{{ url }}">{{ title }}</a></h2>\
                    <p class="post-metadata">\
                       <span class="metadata"><i class="fa fa-calendar"></i> {{ date }}</span>\
                       <span class="metadata"><i class="fa fa-user"></i> {{ author }}</span>\
                    </p>\
                    <p>{{ summary }}</p>\
                </article>'
  };

  InstantSearch.prototype.debounce = function () {
    var delay = this.options.delay;
    var search = this.search;
    var timer = null;
    var self = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        search.apply(self);
      }, delay);
    };
  };

  InstantSearch.prototype.search = function () {
    var query = $.trim(this.$input.val()).replace(/\s{2,}/g, ' ');

    if (query.length < this.options.minQueryLength) {
      this.$preview.empty();
      return;
    }

    var self = this;
    var data = this.$form.serializeArray();
    data['l'] = this.limit;
    $.getJSON(this.$form.attr('action'), data, function (items) {
      self.show(items);
    });
  };

  InstantSearch.prototype.show = function (items) {
    var $preview = this.$preview;
    var itemTemplate = this.options.itemTemplate;

    if (0 === items.length) {
      $preview.html(this.options.noResultsMessage);
    } else {
      $preview.empty();
      $.each(items, function (index, item) {
        $preview.append(itemTemplate.render(item));
      });
    }
  }; // INSTANTS SEARCH PLUGIN DEFINITION
  // =================================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var instance = $this.data('instantSearch');
      var options = _typeof(option) === 'object' && option;
      if (!instance) $this.data('instantSearch', instance = new InstantSearch(this, options));
      if (option === 'search') instance.search();
    });
  }

  $.fn.instantSearch = Plugin;
  $.fn.instantSearch.Constructor = InstantSearch;
})(__webpack_provided_window_dot_jQuery);

/***/ }),

/***/ "./assets/search.js":
/*!**************************!*\
  !*** ./assets/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/jquery.instantSearch.js */ "./assets/js/jquery.instantSearch.js");
/* harmony import */ var _js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(function () {
  $('.search-field').instantSearch({
    delay: 100
  }).keyup();
});

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var res = maybeCallNative(nativeSearch, this, string);
      if (res.done) return res.value;

      var rx = anObject(this);
      var S = String(string);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-029029","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_s-6da655"], () => (__webpack_exec__("./assets/search.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvanF1ZXJ5Lmluc3RhbnRTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIiQiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJwYXJhbWV0ZXJzIiwicmVwbGFjZSIsIm1hdGNoIiwicGF0dGVybiIsIm5hbWUiLCJJbnN0YW50U2VhcmNoIiwiZWxlbWVudCIsIm9wdGlvbnMiLCIkaW5wdXQiLCIkZm9ybSIsImNsb3Nlc3QiLCIkcHJldmlldyIsImFwcGVuZFRvIiwiZXh0ZW5kIiwiREVGQVVMVFMiLCJkYXRhIiwia2V5dXAiLCJkZWJvdW5jZSIsIm1pblF1ZXJ5TGVuZ3RoIiwibGltaXQiLCJkZWxheSIsIm5vUmVzdWx0c01lc3NhZ2UiLCJpdGVtVGVtcGxhdGUiLCJzZWFyY2giLCJ0aW1lciIsInNlbGYiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJxdWVyeSIsInRyaW0iLCJ2YWwiLCJsZW5ndGgiLCJlbXB0eSIsInNlcmlhbGl6ZUFycmF5IiwiZ2V0SlNPTiIsImF0dHIiLCJpdGVtcyIsInNob3ciLCJodG1sIiwiZWFjaCIsImluZGV4IiwiaXRlbSIsImFwcGVuZCIsIlBsdWdpbiIsIm9wdGlvbiIsIiR0aGlzIiwiaW5zdGFuY2UiLCJmbiIsImluc3RhbnRTZWFyY2giLCJDb25zdHJ1Y3RvciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVVBLENBQVYsRUFBYTtBQUNWOztBQUVBQyxRQUFNLENBQUNDLFNBQVAsQ0FBaUJDLE1BQWpCLEdBQTBCLFVBQVVDLFVBQVYsRUFBc0I7QUFDNUMsV0FBTyxLQUFLQyxPQUFMLENBQWEsZ0JBQWIsRUFBK0IsVUFBVUMsS0FBVixFQUFpQkMsT0FBakIsRUFBMEJDLElBQTFCLEVBQWdDO0FBQ2xFLGFBQU9KLFVBQVUsQ0FBQ0ksSUFBRCxDQUFqQjtBQUNILEtBRk0sQ0FBUDtBQUdILEdBSkQsQ0FIVSxDQVNWO0FBQ0E7OztBQUVBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBVUMsT0FBVixFQUFtQkMsT0FBbkIsRUFBNEI7QUFDNUMsU0FBS0MsTUFBTCxHQUFjWixDQUFDLENBQUNVLE9BQUQsQ0FBZjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxLQUFLRCxNQUFMLENBQVlFLE9BQVosQ0FBb0IsTUFBcEIsQ0FBYjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JmLENBQUMsQ0FBQyx3Q0FBRCxDQUFELENBQTRDZ0IsUUFBNUMsQ0FBcUQsS0FBS0gsS0FBMUQsQ0FBaEI7QUFDQSxTQUFLRixPQUFMLEdBQWVYLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBUyxFQUFULEVBQWFSLGFBQWEsQ0FBQ1MsUUFBM0IsRUFBcUMsS0FBS04sTUFBTCxDQUFZTyxJQUFaLEVBQXJDLEVBQXlEUixPQUF6RCxDQUFmO0FBRUEs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QTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGYTtBQUNiLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakNZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLDJHQUF3QztBQUNwRCw2QkFBNkIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRXRFO0FBQ0E7QUFDQSxHQUFHLHdFQUF3RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1hELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogalF1ZXJ5IHBsdWdpbiBmb3IgYW4gaW5zdGFudCBzZWFyY2hpbmcuXG4gKlxuICogQGF1dGhvciBPbGVnIFZvcm9ua292aWNoIDxvbGVnLXZvcm9ua292aWNoQHlhbmRleC5ydT5cbiAqIEBhdXRob3IgWW9uZWwgQ2VydXRvIDx5b25lbGNlcnV0b0BnbWFpbC5jb20+XG4gKi9cbihmdW5jdGlvbiAoJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIFN0cmluZy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKHt7IChcXHcrKSB9fSkvZywgZnVuY3Rpb24gKG1hdGNoLCBwYXR0ZXJuLCBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyc1tuYW1lXTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gSU5TVEFOVFMgU0VBUkNIIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YXIgSW5zdGFudFNlYXJjaCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGlucHV0ID0gJChlbGVtZW50KTtcbiAgICAgICAgdGhpcy4kZm9ybSA9IHRoaXMuJGlucHV0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy4kcHJldmlldyA9ICQoJzx1bCBjbGFzcz1cInNlYXJjaC1wcmV2aWV3IGxpc3QtZ3JvdXBcIj4nKS5hcHBlbmRUbyh0aGlzLiRmb3JtKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIEluc3RhbnRTZWFyY2guREVGQVVMVFMsIHRoaXMuJGlucHV0LmRhdGEoKSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy4kaW5wdXQua2V5dXAodGhpcy5kZWJvdW5jZSgpKTtcbiAgICB9O1xuXG4gICAgSW5zdGFudFNlYXJjaC5ERUZBVUxUUyA9IHtcbiAgICAgICAgbWluUXVlcnlMZW5ndGg6IDIsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgbm9SZXN1bHRzTWVzc2FnZTogJ05vIHJlc3VsdHMgZm91bmQnLFxuICAgICAgICBpdGVtVGVtcGxhdGU6ICdcXFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicG9zdFwiPlxcXG4gICAgICAgICAgICAgICAgICAgIDxoMj48YSBocmVmPVwie3sgdXJsIH19XCI+e3sgdGl0bGUgfX08L2E+PC9oMj5cXFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBvc3QtbWV0YWRhdGFcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1ldGFkYXRhXCI+PGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT4ge3sgZGF0ZSB9fTwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1ldGFkYXRhXCI+PGkgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPiB7eyBhdXRob3IgfX08L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHN1bW1hcnkgfX08L3A+XFxcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+J1xuICAgIH07XG5cbiAgICBJbnN0YW50U2VhcmNoLnByb3RvdHlwZS5kZWJvdW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlbGF5ID0gdGhpcy5vcHRpb25zLmRlbGF5O1xuICAgICAgICB2YXIgc2VhcmNoID0gdGhpcy5zZWFyY2g7XG4gICAgICAgIHZhciB0aW1lciA9IG51bGw7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoLmFwcGx5KHNlbGYpO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBJbnN0YW50U2VhcmNoLnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWVyeSA9ICQudHJpbSh0aGlzLiRpbnB1dC52YWwoKSkucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuICAgICAgICBpZiAocXVlcnkubGVuZ3RoIDwgdGhpcy5vcHRpb25zLm1pblF1ZXJ5TGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLiRwcmV2aWV3LmVtcHR5KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kZm9ybS5zZXJpYWxpemVBcnJheSgpO1xuICAgICAgICBkYXRhWydsJ10gPSB0aGlzLmxpbWl0O1xuXG4gICAgICAgICQuZ2V0SlNPTih0aGlzLiRmb3JtLmF0dHIoJ2FjdGlvbicpLCBkYXRhLCBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIHNlbGYuc2hvdyhpdGVtcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBJbnN0YW50U2VhcmNoLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIHZhciAkcHJldmlldyA9IHRoaXMuJHByZXZpZXc7XG4gICAgICAgIHZhciBpdGVtVGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuaXRlbVRlbXBsYXRlO1xuXG4gICAgICAgIGlmICgwID09PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2aWV3Lmh0bWwodGhpcy5vcHRpb25zLm5vUmVzdWx0c01lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHByZXZpZXcuZW1wdHkoKTtcbiAgICAgICAgICAgICQuZWFjaChpdGVtcywgZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgJHByZXZpZXcuYXBwZW5kKGl0ZW1UZW1wbGF0ZS5yZW5kZXIoaXRlbSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gSU5TVEFOVFMgU0VBUkNIIFBMVUdJTiBERUZJTklUSU9OXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9ICR0aGlzLmRhdGEoJ2luc3RhbnRTZWFyY2gnKTtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgb3B0aW9uO1xuXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlKSAkdGhpcy5kYXRhKCdpbnN0YW50U2VhcmNoJywgKGluc3RhbmNlID0gbmV3IEluc3RhbnRTZWFyY2godGhpcywgb3B0aW9ucykpKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ3NlYXJjaCcpIGluc3RhbmNlLnNlYXJjaCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgICQuZm4uaW5zdGFudFNlYXJjaCA9IFBsdWdpbjtcbiAgICAkLmZuLmluc3RhbnRTZWFyY2guQ29uc3RydWN0b3IgPSBJbnN0YW50U2VhcmNoO1xuXG59KSh3aW5kb3cualF1ZXJ5KTtcbiIsImltcG9ydCAnLi9qcy9qcXVlcnkuaW5zdGFudFNlYXJjaC5qcyc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLnNlYXJjaC1maWVsZCcpXG4gICAgICAgIC5pbnN0YW50U2VhcmNoKHtcbiAgICAgICAgICAgIGRlbGF5OiAxMDAsXG4gICAgICAgIH0pXG4gICAgICAgIC5rZXl1cCgpO1xufSk7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xuXG4vLyBjaGVjayB0aGF0IGEgbWV0aG9kIHdvcmtzIHdpdGggdGhlIGNvcnJlY3QgbGlzdFxuLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKSB8fCBub25bTUVUSE9EX05BTUVdKCkgIT0gbm9uIHx8IHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRTtcbiAgfSk7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyJyArXG4gICdcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG4gICAgICByZXR1cm4gc2VhcmNoZXIgIT09IHVuZGVmaW5lZCA/IHNlYXJjaGVyLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCB0aGlzLCBzdHJpbmcpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHN0cmluZyk7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gc3BlYyByZXF1aXJlbWVudFxuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==