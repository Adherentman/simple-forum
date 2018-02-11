import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider, graphql } from 'react-apollo';
import { ApolloClient } from 'apollo-client';

import { store, client } from './env';
import App from './components/App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
