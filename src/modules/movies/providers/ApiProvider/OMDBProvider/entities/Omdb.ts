/**
 * @swagger
 * components:
 *   schemas:
 *     OmdbSearchResult:
 *       type: object
 *       required:
 *         - Title
 *         - Year
 *         - imdbID
 *         - Type
 *         - Poster
 *       properties:
 *         Title:
 *           type: string
 *           description: Título do filme, série ou episódio
 *           example: "The Shawshank Redemption"
 *         Year:
 *           type: string
 *           description: Ano de lançamento
 *           example: "1994"
 *         imdbID:
 *           type: string
 *           description: Identificador único do IMDB
 *           example: "tt0111161"
 *         Type:
 *           type: string
 *           description: Tipo de mídia (filme, série, episódio)
 *           enum: [movie, series, episode]
 *           example: "movie"
 *         Poster:
 *           type: string
 *           description: URL para o poster/imagem do título
 *           format: uri
 *           example: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
 */
export interface IOmdbSearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     OmdbEntity:
 *       type: object
 *       properties:
 *         Title:
 *           type: string
 *           description: Título do filme/série
 *           example: "The Shawshank Redemption"
 *         Year:
 *           type: string
 *           description: Ano de lançamento
 *           example: "1994"
 *         Rated:
 *           type: string
 *           description: Classificação indicativa
 *           example: "R"
 *         Released:
 *           type: string
 *           description: Data de lançamento
 *           example: "14 Oct 1994"
 *         Runtime:
 *           type: string
 *           description: Duração
 *           example: "142 min"
 *         Genre:
 *           type: string
 *           description: Gêneros
 *           example: "Drama"
 *         Director:
 *           type: string
 *           description: Diretor(es)
 *           example: "Frank Darabont"
 *         Writer:
 *           type: string
 *           description: Roteirista(s)
 *           example: "Stephen King, Frank Darabont"
 *         Actors:
 *           type: string
 *           description: Atores principais
 *           example: "Tim Robbins, Morgan Freeman, Bob Gunton"
 *         Plot:
 *           type: string
 *           description: Sinopse
 *           example: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
 *         Language:
 *           type: string
 *           description: Idiomas disponíveis
 *           example: "English"
 *         Country:
 *           type: string
 *           description: País(es) de origem
 *           example: "USA"
 *         Awards:
 *           type: string
 *           description: Prêmios recebidos
 *           example: "Nominated for 7 Oscars. Another 21 wins & 32 nominations."
 *         Poster:
 *           type: string
 *           description: URL da imagem do pôster
 *           example: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
 *         Ratings:
 *           type: array
 *           description: Avaliações de várias fontes
 *           items:
 *             type: object
 *             properties:
 *               Source:
 *                 type: string
 *                 description: Fonte da avaliação
 *                 example: "Internet Movie Database"
 *               Value:
 *                 type: string
 *                 description: Valor da avaliação
 *                 example: "9.3/10"
 *             required:
 *               - Source
 *               - Value
 *         Metascore:
 *           type: string
 *           description: Pontuação no Metacritic
 *           example: "80"
 *         imdbRating:
 *           type: string
 *           description: Avaliação no IMDB
 *           example: "9.3"
 *         imdbVotes:
 *           type: string
 *           description: Número de votos no IMDB
 *           example: "2,405,511"
 *         imdbID:
 *           type: string
 *           description: ID único no IMDB
 *           example: "tt0111161"
 *         Type:
 *           type: string
 *           description: Tipo (filme, série, episódio)
 *           example: "movie"
 *         DVD:
 *           type: string
 *           description: Data de lançamento em DVD
 *           example: "21 Dec 1999"
 *         BoxOffice:
 *           type: string
 *           description: Bilheteria
 *           example: "$28,767,189"
 *         Production:
 *           type: string
 *           description: Empresa(s) de produção
 *           example: "Columbia Pictures, Castle Rock Entertainment"
 *         Website:
 *           type: string
 *           description: Site oficial
 *           example: "N/A"
 *         Response:
 *           type: string
 *           description: Status da resposta da API
 *           example: "True"
 *       required:
 *         - Title
 *         - Year
 *         - imdbID
 *         - Type
 *         - Response
 */
export interface IOmdbEntity {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
