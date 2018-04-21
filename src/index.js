import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import { ApolloClient, gql, HttpLink, InMemoryCache, ApolloLink } from 'apollo-boost';
import ApolloProvider from 'react-apollo';

import { client } from './env';
import App from './components/App';


// client.query({query: gql`{books{title}}`}).then(console.log);

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  document.getElementById('root')
);
