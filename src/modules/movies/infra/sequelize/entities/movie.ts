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

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - description
 *         - released_year
 *         - user_id
 *         - created_at
 *         - updated_at
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         released_year:
 *           type: integer
 *         user_id:
 *           type: string
 *           format: uuid
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 123e4567-e89b-12d3-a456-426614174000
 *         title: The Shawshank Redemption
 *         description: Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.
 *         released_year: 1994
 *         user_id: 123e4567-e89b-12d3-a456-426614174000
 *         created_at: 2022-01-01T00:00:00.000Z
 *         updated_at: 2022-01-01T00:00:00.000Z
 */

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
