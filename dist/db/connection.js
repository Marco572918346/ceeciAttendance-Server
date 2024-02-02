"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('ceeci_prospectos', 'admin', 'n1z4pH3c', {
    host: 'mysql-160592-0.cloudclusters.net',
    dialect: 'mysql',
    port: 16843
});
exports.default = sequelize;
