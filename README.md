# trimcate

take a long text, and return a truncated previewable version:

Input: (https://tools.ietf.org/html/rfc1866)
```
  "The Hypertext Markup Language (HTML) is a simple markup language used to create hypertext documents that are platform independent. HTML documents are SGML documents with generic semantics that are appropriate for representing information from a wide range of domains. HTML markup can represent hypertext news, mail, documentation, and hypermedia; menus of options; database query results; simple structured documents with in-lined graphics; and hypertext views of existing bodies of information."
```
Output:
```
  "The Hypertext Markup Language (HTML) … of information."
```

## trimcate

```
  trimcate(text, options)
```

### options object

you can run trimcate without any options, or put one or all into your call:

```javascript
  prelude: 20, // {Number} how long the beginning text should be, default `20`
  postlude: 10, // {Number} how long the end text should be, default `10`
  separator: '…', // {String} to glue start and end together, default `…`
  wholeWorlds: false, // {Boolean} telling trimcate preserve words and don't cut hard into the text, default `false`
```

you can set all or single or some of the options:

`trimcate("Hello World…", { wholeWords: true });`

`trimcate("Hello World…", { prelude: 36, postlude: 8 });`

`trimcate("Hello World…", { prelude: 24, separator: '🤍' });`

## usage

```javascript
  import trimcate from 'trimcate';
  …
  return trimcate(text);
```

Have a look at [index.html](./index.html) to see a working example
