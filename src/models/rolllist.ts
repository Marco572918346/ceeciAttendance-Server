import { DataTypes } from 'sequelize';
import db from '../db/connection';
import User from './user';

const RollList = db.define('RollLists', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    attendance: {
        type: DataTypes.BOOLEAN
    },
    studentId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    date: {
        type: DataTypes.DATEONLY
    }
});

// RollList.belongsTo(User, { foreignKey: 'studentId', as: 'rools' });

export default RollList;