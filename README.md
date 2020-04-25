# trimcate

a function to help you truncate long text into a starting part, a _hellip_ part and an end part.

## trimcate

```
  trimcate(text, options)
```

### options object

`prelude: 20`: Number how long the beginning text should be, default `20`
`postlude: 10`: Number how long the end text should be, default `10`
`separator: '…'`: String to glue start and end together, default `…`
`wholeWorlds: false`: Boolean telling trimcate preserve words and don't cut hard into the text, default `false`

you can set all or single or some of the options:

`trimcate("Hello World…", { wholeWords: true })`
`trimcate("Hello World…", { prelude: 36, postlude: 8 })`
`trimcate("Hello World…", { prelude: 24, separator: '🤍' })`
