import React from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';

export default class Songkick extends React.Component {
  render() {
    return (
      <Container>
        <a href="https://www.songkick.com/artists/9063089"
        className="songkick-widget"
        data-theme="dark"
        data-track-button="on"
        data-detect-style="true"
        // '\u00A0' used as empty looking placeholder
        // to get rid of console warning
        data-background-color={Colors.background}>{'\u00A0'}</a>
      </Container>
    );
  }
}

const Container = styled.div`
width: 100%;
max-width: 720px;

& > * {
  width: 100%;
}
`;
