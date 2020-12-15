import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <UserForm onSubmit={activateAuth} title='Sign In' />
            <UserForm onSubmit={activateAuth} title='Register' />
          </>
        );
      }}
    </Context.Consumer>
  );
};
