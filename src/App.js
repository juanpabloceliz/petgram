import React from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ListOfCategories } from './components/ListOfCategories';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
    </div>
  );
};
