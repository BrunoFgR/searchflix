import { DataTypes, Model, Sequelize, Optional, ModelStatic } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "password_hash"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public password_hash!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  static initialize(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
        },
        password_hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.VIRTUAL,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "users",
        underscored: true,
      },
    );

    return this;
  }

  static associate(models: { [key: string]: ModelStatic<Model> }) {
    User.hasMany(models.Movie, { foreignKey: "user_id" });
  }
}

export { User };
