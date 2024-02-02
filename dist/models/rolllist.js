"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const RollList = connection_1.default.define('RollLists', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    attendance: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    studentId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY
    }
});
// RollList.belongsTo(User, { foreignKey: 'studentId', as: 'rools' });
exports.default = RollList;
