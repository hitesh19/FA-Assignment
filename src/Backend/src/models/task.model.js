// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const task = sequelizeClient.define('task', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BucketId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      field:'bucket_id'
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
      field:'status'
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull:false ,
      field: 'is_active'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  task.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return task;
};
