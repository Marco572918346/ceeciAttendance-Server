"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const status_1 = __importDefault(require("./status"));
const course_1 = __importDefault(require("./course"));
const rolllist_1 = __importDefault(require("./rolllist"));
const User = connection_1.default.define('User', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    secondLastname: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Statuses',
            key: 'id'
        }
    },
    area: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Courses',
            key: 'id'
        }
    },
    observations: {
        type: sequelize_1.DataTypes.STRING
    }
});
User.belongsTo(status_1.default, { foreignKey: 'status', as: 'userStatus' });
User.belongsTo(course_1.default, { foreignKey: 'area', as: 'course' });
User.hasMany(rolllist_1.default, { foreignKey: 'studentId', as: 'studentRoll' });
// RollList.belongsTo(User, { foreignKey: 'studentId', as: 'rools' });
exports.default = User;
