import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { LayoutContextProvider } from './contexts/layout';
import {RoleContextProvider} from './contexts/Role.js'
import {UiConfigContextProvider} from './contexts/UiConfig.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutContextProvider>
        <RoleContextProvider>
          <UiConfigContextProvider>
            <App />
          </UiConfigContextProvider>
        </RoleContextProvider>
      </LayoutContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
