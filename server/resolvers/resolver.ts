import * as MongoClient from 'mongodb';
import env from '../env';
import { find } from 'lodash';

const myMongoDb = new Promise((resolve, reject) => {
  MongoClient.connect(env.MongoDbUrl, async (err: any, database: any) => {
    const resDb = await database.db('test');
    resolve(resDb);
  })
});

// The resolvers
export const resolvers = {
  Query: {
    // books: () => new Promise((res, rej) => {
    //   MongoClient.connect(env.MongoDbUrl, async (err, database: any) => {
    //     const myAwesomeDB = await database.db('test');
    //     const col = myAwesomeDB.collection('book');
    //     var doc = await col.find().toArray();
    //     res(doc);
    //   })
    // })
    books: async function () {
      let db: any = await myMongoDb;
      const col = db.collection('book');
      var doc = await col.find().toArray();
      console.log('jieguo', doc);
      return doc;
    }
  },
};

