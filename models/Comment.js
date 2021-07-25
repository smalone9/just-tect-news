const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // columns will go here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comment_text: {
        type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id'
          }  
      },
      // field to hold primary key
      user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id'
          }
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;