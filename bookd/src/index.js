import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import primaryTheme from './themes/primaryTheme';
import CssBaseline from '@mui/material/CssBaseline';
import CustomThemeProvider from './context/ThemeContext';
import AppContextProvider from './context/AppContext';
// import { render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider theme={primaryTheme}>
        <AppContextProvider>
          <CssBaseline/>
          <App/>
        </AppContextProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  //{/* </React.StrictMode> */}
);

reportWebVitals();
