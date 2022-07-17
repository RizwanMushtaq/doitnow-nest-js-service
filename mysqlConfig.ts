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

const mysqlConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'oliadkuxrl9xdugh.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  port: 3306,
  username: 'ftbsofct0we5g4uh',
  password: 'pdnmbokgbc4pylp2',
  database: 'iylb880pcgd1781u',
  entities: [User, Todo],
  // entities: ['dist/src/**/*.entity.js'],
  // entities: [__dirname + '/../**/*.entity{.ts,.js'],
  synchronize: true,
};

export default mysqlConfig;
