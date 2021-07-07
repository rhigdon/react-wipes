import React from 'react';
import { Provider, useSelector } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import {Routes} from './Routes'
import {generateTheme} from './theme';
import store from './store'
import {getPrimaryColor, isDarkTheme} from "./theme/selectors";

function ConnectedApp() {
  const primaryColor = useSelector(getPrimaryColor)
  const darkTheme = useSelector(isDarkTheme)
  return (
    <ThemeProvider
      theme={generateTheme(primaryColor, darkTheme)}
    >
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

function App() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}

export default App;
