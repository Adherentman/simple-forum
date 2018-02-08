import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolver';

// The GraphQL schema in string form
const typeDefs = `
  type Query { 
    books: [Book] 
  }
  type Book { 
    title: String
  }
`;

// Put together a schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});