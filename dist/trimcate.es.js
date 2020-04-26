/*! trimcate - v1.0.0 - 2020-04-26
* https://github.com/djpogo/trimcate#readme
* Copyright (c) 2020 ; Licensed GNU General Public License v3.0 */


/**
 * take long text into its parts and return a previewfriendly string
 * @param {String} text
 * @param {Object} options
 * @return {String}
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
    start = text.substr(0, prelude);
    end = text.substr(postlude * -1);
  }

  // return shortened trimcated text
  return `${start}${separator}${end}`;
}

export default trimcate;
