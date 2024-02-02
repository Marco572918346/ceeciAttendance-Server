import { DataTypes } from 'sequelize';
import db from '../db/connection';
import User from './user';

const Status = db.define('Status', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    }
});

// Status.hasMany(User, { foreignKey: 'status', as: 'user' });


export default Status;