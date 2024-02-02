import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ceeci_prospectos', 'admin', 'n1z4pH3c', {
  host: 'mysql-160592-0.cloudclusters.net',
  dialect: 'mysql',
  port: 16843
});

export default sequelize;