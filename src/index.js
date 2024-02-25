import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  html {
    font-family: 'Arial', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #363636;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: linen;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: none;
  }

  input {
    border-radius: 0;
  }

  input::placeholder {
    opacity: 1;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
