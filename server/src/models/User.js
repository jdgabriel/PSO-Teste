const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        cpf: DataTypes.STRING,
        birthday: DataTypes.DATE,
        weigth: DataTypes.FLOAT,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
