import * as mongoose from 'mongoose';

interface IBook extends mongoose.Document {
  title: string;
}

//mongoose一切从Schema开始
//schema对应mongoDB里的collection，不具备操作数据库能力
const bookSchema = new mongoose.Schema({
  title: String,
});

//将我们的Schema(集合)编译成Model(模型)
//Model是具有抽象属性和数据库操作能力
//mongoose.model(modelName, schema);
const Book = mongoose.model<IBook>('Book', bookSchema);


export default Book;