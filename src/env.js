// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { ApolloClient, gql, HttpLink, InMemoryCache, ApolloLink} from 'apollo-boost';

// import reducers from './reducers/index';

import { onError } from "apollo-link-error";

const errorlink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

var httpLink = new HttpLink({ 
  uri: 'http://localhost:8088/graphql', 
  credentials: 'same-origin' 
});

const link = ApolloLink.from([
  errorlink,
  httpLink,
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

// export const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
// );

