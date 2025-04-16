import { DataTypes, Model, ModelStatic, Optional, Sequelize } from "sequelize";

interface MovieAttributes {
  id: string;
  title: string;
  description: string;
  released_year: number;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
}

interface MovieCreationAttributes extends Optional<MovieAttributes, "id"> {}

class Movie extends Model<MovieAttributes, MovieCreationAttributes> {
  public id!: string;
  public title!: string;
  public description!: string;
  public released_year!: number;
  public user_id!: string;
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
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        released_year: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "movies",
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    );
    return this;
  }

  static associate(models: { [key: string]: ModelStatic<Model> }) {
    this.belongsTo(models.User, { foreignKey: "user_id" });
  }
}

export { Movie };
