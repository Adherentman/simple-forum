import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApolloProvider, graphql } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset'

import reducers from './reducers/index';


export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});
