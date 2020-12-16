import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import MyContext from './Context';
import { App } from './App';

const client = new ApolloClient({
  uri: 'https://petgram-server.juanpabloceliz.vercel.app/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <MyContext.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </MyContext.Provider>,
  document.getElementById('root')
);
