import React, { Fragment } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';

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
        <>
          <ListOfCategories />
          <ListOfPhotoCards detailId={detailId} />
        </>
      )}
    </div>
  );
};
