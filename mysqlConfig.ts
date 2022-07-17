import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { User } from './src/users/entities/user.entity';
import { Todo } from './src/todos/entities/todo.entity';

//database settings
// const mysqlConfig: MysqlConnectionOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 8889,
//   username: 'root',
//   password: 'root',
//   database: 'doitnow',
//   entities: [User, Todo],
//   // entities: ['dist/src/**/*.entity.js'],
//   // entities: [__dirname + '/../**/*.entity{.ts,.js'],
//   synchronize: true,
// };

//cleardb url = mysql://bf972b71490aa6:c95ace94@eu-cdbr-west-03.cleardb.net/heroku_82da633c91a8c1f?reconnect=true

const mysqlConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'eu-cdbr-west-03.cleardb.net',
  // port: 8000,
  username: 'bf972b71490aa6',
  password: 'c95ace94',
  database: 'heroku_82da633c91a8c1f',
  entities: [User, Todo],
  // entities: ['dist/src/**/*.entity.js'],
  // entities: [__dirname + '/../**/*.entity{.ts,.js'],
  synchronize: true,
};

export default mysqlConfig;
