function p(r, t) {
  const {
    prelude: s,
    postlude: n,
    separator: u,
    wholeWords: o
  } = {
    prelude: 20,
    postlude: 10,
    separator: "…",
    ...t
  };
  if (!r)
    return "";
  if (r = r.split(/\s+/).join(" "), r.length <= s + n || s === 0 && n === 0)
    return r;
  let l = "", e = "";
  if (o) {
    const i = r.split(" ");
    for (l = "", e = ""; l.length < s; )
      l += `${i.shift()} `;
    for (; e.length < n; )
      e = ` ${i.pop()}${e}`;
    if (l.length + e.length >= r.length)
      return r;
  } else
    l = r.substring(0, s), e = n === 0 ? "" : r.substring(n * -1);
  return `${l}${u}${e}`;
}
export {
  p as default
};
