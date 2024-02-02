"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('ceeci_listv2', 'root', undefined, {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
});
exports.default = sequelize;
