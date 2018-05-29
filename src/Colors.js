const base = {
  background: '#090909',
  headline: 'white',
  bodyCopy: 'white'

};

const Colors = {
  background: base.background,
  headline: base.headline,
  bodyCopy: base.bodyCopy,
  footerBackground: '#373a47'
};

if (Object.freeze) Object.freeze(Colors);

export default Colors;
