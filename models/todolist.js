'use strict';

module.exports = function(sequelize, DataTypes) {
  var TodoList = sequelize.define('TodoList', {
    id: DataTypes.UUID,
    title: DataTypes.STRING,
    details: DataTypes.TEXT,
    priority: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    completed_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TodoList;
};
