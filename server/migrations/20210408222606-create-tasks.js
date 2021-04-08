'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      assignee: {
        type: Sequelize.INTEGER
      },
      duedate: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      projectid: {
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.INTEGER
      },
      priority: {
        type:   DataTypes.ENUM,
        values: ['low', 'medium', 'high'],
        defaultValue: 'low'
      },
      section: {
        type:   DataTypes.ENUM,
        values: ['todo', 'in progress', 'complete'],
        defaultValue: 'todo'
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};