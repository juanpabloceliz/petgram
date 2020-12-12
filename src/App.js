import React, { Fragment } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { Home } from './pages/Home';
import { Router } from '@reach/router';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery detailId={detailId} />
      ) : (
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
        </Router>
      )}
    </div>
  );
};
