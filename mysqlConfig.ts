import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { User } from './src/users/entities/user.entity';
import { Todo } from './src/todos/entities/todo.entity';

//database settings
const mysqlConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 8889,
  username: 'root',
  password: 'root',
  database: 'doitnow',
  entities: [User, Todo],
  // entities: ['dist/src/**/*.entity.js'],
  // entities: [__dirname + '/../**/*.entity{.ts,.js'],
  synchronize: true,
};

export default mysqlConfig;
