import React from 'react';
import { List, Item } from './styles';
import { Category } from '../Category';

export const ListOfCategories = () => {
  return (
    <List>
      {[1, 2].map((category) => (
        <Item key={category}>
          <Category />
        </Item>
      ))}
    </List>
  );
};
