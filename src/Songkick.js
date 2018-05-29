import React from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';

export default class Songkick extends React.Component {
  render() {
    return (
      <a href="https://www.songkick.com/artists/9063089"
      class="songkick-widget"
      data-theme="dark"
      data-track-button="on"
      data-detect-style="true"
      data-background-color={Colors.background}></a>
    );
  }
}
