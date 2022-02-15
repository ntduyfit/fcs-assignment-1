import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import Container from '@mui/material/Container';

import theme from '../theme';
import createEmotionCache from '../cache/emotionCache';
import Navigation from '../components/navigation';
import { RouteContextProvider } from '../store/route';
import { CartContextProvider } from '../store/cart';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CartContextProvider>
          <RouteContextProvider>
            <React.Fragment>
              <Container sx={{ pt: 2 }} maxWidth='sm'>
                <Component {...pageProps} />
              </Container>
              <Navigation />
            </React.Fragment>
          </RouteContextProvider>
        </CartContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};
