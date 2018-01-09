import * as Koa from 'koa';
import * as mongoose from 'mongoose';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import { graphiqlKoa } from 'apollo-server-koa';

import env from './env';

const app = new Koa();
const router = new koaRouter();

const port: number = 8888;

app.use(koaBody());

router.get('/graphql',
  graphiqlKoa({
    endpointURL: '/graphql'
  }
  ));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);

console.log("Server is running at port " + port);

mongoose.connect(env.MongoDbUrl);
let db = mongoose.connection;

db.on('error', function (error) {
  console.log(error);
});
db.on('connected', function () {
  console.log('Mongoose connection open to ' + env.MongoDbUrl);
});  