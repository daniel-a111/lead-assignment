import { Sequelize, DataTypes } from 'sequelize';
import { DATABASE_PATH } from '../config';

export const sequelize = new Sequelize(`sqlite:${DATABASE_PATH}`, { logging: true });

export const Lead = sequelize.define('Lead', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  company: DataTypes.STRING,
  phone: DataTypes.STRING,
  source: DataTypes.STRING,
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  createdAt: 'created_at', // Sequelize will automatically map this to createdAt
  updatedAt: 'updated_at'
}
, {
  indexes: [
    {
      unique: false,
      fields: ['name'],
    },
    {
      fields: ['score'],
    }
  ]
});
