import React from 'react';
import MyContext from '../Context';
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  return (
    <MyContext.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <UserForm onSubmit={activateAuth} title='Sign In' />
            <UserForm onSubmit={activateAuth} title='Register' />
          </>
        );
      }}
    </MyContext.Consumer>
  );
};
