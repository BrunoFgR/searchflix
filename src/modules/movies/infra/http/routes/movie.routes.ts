import { Router } from "express";
import { MovieController } from "../controllers";
import { ensureAuthenticated } from "@modules/users/infra/http/middlewares";

const movieController = new MovieController();
const movieRoutes = Router();

movieRoutes.use(ensureAuthenticated);

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Movie created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       401:
 *         description: Unauthorized
 *       409:
 *         description: Movie already exists
 *       500:
 *         description: Internal server error
 */
movieRoutes.post("/", movieController.create);
/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
movieRoutes.get("/", movieController.list);
/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */
movieRoutes.put("/:id", movieController.update);
/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie ID
 *     responses:
 *       204:
 *         description: Movie deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */
movieRoutes.delete("/:id", movieController.delete);
/**
 * @swagger
 * /api/movies/search:
 *   get:
 *     summary: Search movies
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Movie title
 *     responses:
 *       200:
 *         description: Movies found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OmdbSearchResult'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */
movieRoutes.get("/search", movieController.searchMovies);
/**
 * @swagger
 * /api/movies/{title}/details:
 *   get:
 *     summary: Get movie details
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie title
 *     responses:
 *       200:
 *         description: Movie details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OmdbEntity'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */
movieRoutes.get("/:title/details", movieController.getMovieDetail);

export { movieRoutes };
