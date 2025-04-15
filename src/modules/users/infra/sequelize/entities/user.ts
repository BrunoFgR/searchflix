import { DataTypes, Model, Sequelize, Optional } from "sequelize";
import bcrypt from "bcryptjs";

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
          defaultValue: "",
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
        hooks: {
          beforeSave: async (user: User) => {
            if (user.password) {
              user.password_hash = await bcrypt.hash(user.password, 10);
            }
          },
        },
      },
    );

    return this;
  }

  public checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash);
  }
}

export { User };
