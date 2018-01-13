import * as mongoose from 'mongoose';

interface IKitten extends mongoose.Document {
  name: string;
  speak: any;
}

//mongoose一切从Schema开始
//schema对应mongoDB里的collection，不具备操作数据库能力
const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function() {
  const greeting = this.name ? "Meow name is" + this.name : "I don't have a name";
  console.log(greeting);
}
//将我们的Schema(集合)编译成Model(模型)
//Model是具有抽象属性和数据库操作能力
//mongoose.model(modelName, schema);
export const Kitten = mongoose.model<IKitten>('Kitten', kittySchema);
