import * as Koa from 'koa';
import * as mongoose from 'mongoose';

import { Kitten } from './models/kitten';
import env from './env';

const app = new Koa();

const port: number = 8888;
// 响应
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

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

app.listen(port);
console.log("Server is running at port " + port );