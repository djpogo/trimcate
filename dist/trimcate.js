/*! trimcate - v1.0.2 - 2023-05-11
* https://github.com/djpogo/trimcate#readme
* Copyright (c) 2023 ; Licensed  */


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.trimcate = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * take long text into its parts and return a previewfriendly string
   * @param {String} text
   * @param {Object} [options]
   * @param {Number} [options.prelude] - number of charactes before `separator`
   * @param {Number} [options.postlude] - number of characters after `separator`
   * @param {Boolean} [options.wholeWords] - flag to keep word together and dont create word chunks
   * @param {String} [options.separator] - String/Character used as separator
   * @return {String} - shortened version of text
   */
  function trimcate (text, options) {
    // setup default options parametes by object destructuring
    var _prelude$postlude$sep = _objectSpread2({
      prelude: 20,
      postlude: 10,
      separator: '…'
    }, options),
        prelude = _prelude$postlude$sep.prelude,
        postlude = _prelude$postlude$sep.postlude,
        separator = _prelude$postlude$sep.separator,
        wholeWords = _prelude$postlude$sep.wholeWords; // on empty/falsy text params, return empty string


    if (!text) {
      return '';
    } // trim text
    // eslint-disable-next-line no-param-reassign


    text = text.split(/\s+/).join(' '); // texts shorter than the prelude + postlude, will be return as wholesame

    if (text.length <= prelude + postlude) {
      return text;
    } // if prelude and postlude are 0 return whole text


    if (prelude === 0 && postlude === 0) {
      return text;
    } // start text shortening


    var start = '';
    var end = ''; // should trimcate only truncate text after whole words

    if (wholeWords) {
      var textSplits = text.split(' ');
      start = '';
      end = '';

      while (start.length < prelude) {
        start += "".concat(textSplits.shift(), " ");
      }

      while (end.length < postlude) {
        end = " ".concat(textSplits.pop()).concat(end);
      } // is whole words version longer than original text, return original text


      if (start.length + end.length >= text.length) {
        return text;
      }
    } else {
      start = text.substring(0, prelude);
      end = postlude === 0 ? '' : text.substring(postlude * -1);
    } // return shortened trimcated text


    return "".concat(start).concat(separator).concat(end);
  }

  return trimcate;

})));
