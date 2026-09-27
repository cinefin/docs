// Code highlighting drawn from the interface tokens: mostly text and muted,
// with one warm tint for strings and the blue channel's pale for commands.
// No rainbow — colour in this system is for signals and posters.
const base = (c) => ({
  plain: {color: c.text, backgroundColor: c.surface},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: c.faint, fontStyle: 'italic'}},
    {types: ['punctuation', 'operator'], style: {color: c.muted}},
    {types: ['keyword', 'boolean', 'constant', 'builtin'], style: {color: c.muted}},
    {types: ['string', 'char', 'attr-value', 'url'], style: {color: c.string}},
    {types: ['function', 'class-name', 'variable', 'parameter', 'property'], style: {color: c.cmd}},
    {types: ['number'], style: {color: c.string}},
  ],
});

export const darkCode = base({
  text: '#eef1f7', muted: '#9aa3b6', faint: '#687187',
  surface: '#0e1118', string: '#d8c89c', cmd: '#a9c1ff',
});

export const lightCode = base({
  text: '#1c2230', muted: '#59627a', faint: '#8890a6',
  surface: '#fafbfd', string: '#7a6424', cmd: '#2d59b8',
});
