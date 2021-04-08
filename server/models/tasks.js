'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tasks.init({
    title: DataTypes.STRING,
    assignee: DataTypes.INTEGER,
    duedate: DataTypes.DATE,
    description: DataTypes.TEXT,
    projectid: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    priority: DataTypes.ENUM,
    section: DataTypes.ENUM,
    active: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};