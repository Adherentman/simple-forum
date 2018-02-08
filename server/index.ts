import * as Koa from 'koa';
import * as MongoClient from 'mongodb';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import { schema } from './schemas/scheme';

import env from './env';

const app = new Koa();

const router = new koaRouter();

const port: number = 8088;

// koaBody 仅在POST的时候需要.
app.use(koaBody());

MongoClient.connect(env.MongoDbUrl, (res: any) => {
  console.log('Mongodb server is run: ' + env.MongoDbUrl);
});

router.post('/graphql', graphqlKoa({
  schema,
  })
);

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
console.log("Server is running at port " + port);



//Model(模型)创造Entity(实体)
//Entity可对数据库操作造成影响但是Model比Entity更具操作性

// const fluffy = new Kitten({ name: 'Slicence' });
// fluffy.save((err, fluffy) => {
//   if(err) console.error(err);
//   fluffy.speak();
// })