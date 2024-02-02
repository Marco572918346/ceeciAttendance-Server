import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Status from './status';
import Course from './course';
import RollList from './rolllist';

const User = db.define('User', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    secondLastname: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
    },
    address: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Statuses',
          key: 'id'
        }
      },
    area: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Courses',
          key: 'id'
        }
      },
    observations: {
        type: DataTypes.STRING
    }
});

User.belongsTo(Status, { foreignKey: 'status', as: 'userStatus' });
User.belongsTo(Course, { foreignKey: 'area', as: 'course' });

User.hasMany(RollList, { foreignKey: 'studentId', as: 'studentRoll' });
// RollList.belongsTo(User, { foreignKey: 'studentId', as: 'rools' });


export default User;
