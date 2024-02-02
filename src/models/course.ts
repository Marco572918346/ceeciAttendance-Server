import { DataTypes } from 'sequelize';
import db from '../db/connection';
import User from './user';

const Course = db.define('Course', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    area: {
        type: DataTypes.STRING
    }
});

// Course.belongsTo(User, { foreignKey: 'area', as: 'user' });

export default Course;