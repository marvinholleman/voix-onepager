import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";

import Page from './modules/Page';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('./src/static/CircularStd-Medium.otf');
    font-family: 'Circular Std';
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Page />
      </>
    );
  }
}

export default App;
