import React from 'react';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore"
import {ThemeProvider} from 'styled-components';
import theme from './services/styled/theme';
import Router from "./modules/router/Router"


export default () => {
  let store = configureStore({}, {})

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router/>
      </Provider>
    </ThemeProvider>
  );
}

