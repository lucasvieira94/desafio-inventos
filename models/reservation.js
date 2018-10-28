module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "reservation",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      deleted_at: {
        type: DataTypes.DATE
      }
    }, {
      paranoid: true,
      underscored: true
    }
  );
};
