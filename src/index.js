import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from './components/theme';
import GlobalStyle from './components/styled/component/GlobalStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content';
import styled from 'styled-components';
import AppContainer from './components/Header/AppContainer';
import AppRouters from './components/routers/AppRouters';

ReactDOM.render(
  <ThemeProvider>
  <CSSReset />
    <GlobalStyle />
      <AppRouters />
  </ThemeProvider>,
  document.getElementById('root')
);
