/*! trimcate - v1.0.2 - 2023-05-12
* https://github.com/djpogo/trimcate#readme
* Copyright (c) 2023 ; Licensed  */


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
  const {
    prelude,
    postlude,
    separator,
    wholeWords,
  } = {
    prelude: 20,
    postlude: 10,
    separator: '…',
    ...options,
  };

  // on empty/falsy text params, return empty string
  if (!text) {
    return '';
  }

  // trim text
  // eslint-disable-next-line no-param-reassign
  text = text.split(/\s+/).join(' ');

  // texts shorter than the prelude + postlude, will be return as wholesame
  if (text.length <= prelude + postlude) {
    return text;
  }

  // if prelude and postlude are 0 return whole text
  if (prelude === 0 && postlude === 0) {
    return text;
  }

  // start text shortening
  let start = '';
  let end = '';

  // should trimcate only truncate text after whole words
  if (wholeWords) {
    const textSplits = text.split(' ');
    start = '';
    end = '';
    while (start.length < prelude) {
      start += `${textSplits.shift()} `;
    }
    while (end.length < postlude) {
      end = ` ${textSplits.pop()}${end}`;
    }
    // is whole words version longer than original text, return original text
    if (start.length + end.length >= text.length) {
      return text;
    }
  } else {
    start = text.substring(0, prelude);
    end = postlude === 0 ? '' : text.substring(postlude * -1);
  }

  // return shortened trimcated text
  return `${start}${separator}${end}`;
}

export default trimcate;
