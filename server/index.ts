import * as Koa from 'koa';
import * as MongoClient from 'mongodb';
import * as path from 'path';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import * as serve from 'koa-static';
import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';

import * as webpack from'webpack';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
import * as  convert from 'koa-convert';
var devConfig = require('../../webpack.dev.js');

import { schema } from './schemas/scheme';
import env from './env';

const app = new Koa();
const compile = webpack(devConfig);

const dwm = devMiddleware(compile, {
  noInfo: false,
  quiet: false,
  lazy: false,
  watchOptions: {
      aggregateTimeout: 300,
      poll: true
  },
  publicPath: "/",
  headers: { "X-Custom-Header": "yes" },
  stats: {
      colors: true
  }
});
app.use(convert(dwm));
app.use(convert(hotMiddleware(compile, {
  // log: console.log,
  // path: '/__webpack_hmr',
  // heartbeat: 10 * 1000
})));
  
const router = new koaRouter();

const port: number = 8088;
const staticPath: string = path.resolve(__dirname, '..', '..', 'dist');


// koaBody 仅在POST的时候需要.
app.use(koaBody());
app.use(serve(staticPath, { extensions: ['html']}));

MongoClient.connect(env.MongoDbUrl, (res: any) => {
  console.log('Mongodb server is run: ' + env.MongoDbUrl);
});

router.post(
  '/graphql',
  graphqlKoa({
    schema,
  })
);

router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql',
  })
);

router.get('/404', async ctx => {
  ctx.body = '404!!!';
});

// 加载koa路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(port);
console.log('Server is running at port ' + port);
