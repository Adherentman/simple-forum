import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, gql, HttpLink, InMemoryCache, ApolloLink} from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { store, client } from './env';
import App from './components/App';


client.query({query: gql`{books{title}}`}).then(console.log);

ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>,
  document.getElementById('root')
);
