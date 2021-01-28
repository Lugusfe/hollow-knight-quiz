/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {

  margin: 0;
  padding: 0;
  /* New styles */
  display: flex;
  flex-direction: column;
  font-family: 'Fraunces', sans-serif;
  // Deixa branco no começo
  color: ${({ theme }) => theme.colors.contrastText};
}

html, body {
  min-height: 100vh;
}

#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

// eslint-disable-next-line prefer-destructuring
const theme = db.theme;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
      <link rel="icon" type="image/png" href="https://hollowknight.com/wp-content/uploads/2018/09/cropped-knight_head.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
