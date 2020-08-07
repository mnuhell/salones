import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from './components/theme';
import GlobalStyle from './components/styled/component/GlobalStyle';
import AppRouters from './components/routers/AppRouters';

ReactDOM.render(
  <ThemeProvider>
  <CSSReset />
    <GlobalStyle />
      <div className="wrapper">
        <AppRouters />
      </div>
  </ThemeProvider>,
  document.getElementById('root')
);
