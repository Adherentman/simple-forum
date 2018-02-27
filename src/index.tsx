import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, gql, HttpLink, InMemoryCache} from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { store } from './env';
import App from './components/App';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://loalhost:8088/graphql' }),
  cache: new InMemoryCache()
});

client.query({query: gql`{query{books{title}}}`}).then(console.log);

ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>,
  document.getElementById('root')
);
