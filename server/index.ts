import * as Koa from 'koa';
import * as mongoose from 'mongoose';

import { Kitten } from './models/kitten';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';

import env from './env';

const app = new Koa();

const router = new koaRouter();

const port: number = 8888;

// koaBody 仅在POST的时候需要.
app.use(koaBody());

//连接mongodb
mongoose.connect(env.MongoDbUrl);
let db = mongoose.connection;

//未连接上会报error
db.on('error', function(error){
  console.log(error);
});
db.on('connected', function () {    
  console.log('Mongoose connection open to ' + env.MongoDbUrl);  
});  


//Model(模型)创造Entity(实体)
//Entity可对数据库操作造成影响但是Model比Entity更具操作性
const fluffy = new Kitten({ name: 'Slicence' });
fluffy.save((err, fluffy) => {
  if(err) console.error(err);
  fluffy.speak();
})

Kitten.find((err, kittens) => {
  if(err) console.error(err);
  console.log(kittens);
})

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];
// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql'
  }
));

router.get('/404', async (ctx) => {
  ctx.body = '404!!!'
});

// 加载koa路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(port);
console.log("Server is running at port " + port );
