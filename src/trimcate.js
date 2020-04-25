export default function (text, options) {
    const {
        prelude,
        postlude,
        separator,
        wholeWords
    } = {
        prelude: 20,
        postlude: 10,
        separator: '…',
        ...options
    };
    if (!text) {
        return '';
    }
    if (text.length <= prelude + postlude) {
        return text;
    }
    if (prelude === 0 && postlude === 0) {
        return text;
    }
    let start = text.substr(0, prelude);
    let end = text.substr(postlude * -1);
    
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
    }
    return `${start}${separator}${end}`;
};