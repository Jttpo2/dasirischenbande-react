const base = {
  background: 'black',
  headline: 'white',
  bodyCopy: 'white'
};

const Colors = {
  background: base.background,
  headline: base.headline,
  bodyCopy: base.bodyCopy
};

if (Object.freeze) Object.freeze(Colors);

export default Colors;
