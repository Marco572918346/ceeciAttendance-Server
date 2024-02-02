import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ceeci_listv2', 'root', undefined, {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
});

export default sequelize;