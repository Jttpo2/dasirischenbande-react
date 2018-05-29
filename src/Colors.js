// import Color from 'color';

const base = {
  background: '#050f05',
  headline: 'white',
  bodyCopy: 'white',
  lighterBackground:'#373a47'
};

const Colors = {
  background: base.background,
  headline: base.headline,
  bodyCopy: base.bodyCopy,
  // footerBackground: Color(base.background).lighten(1).string()
  footerBackground: base.background
};

if (Object.freeze) Object.freeze(Colors);

export default Colors;
