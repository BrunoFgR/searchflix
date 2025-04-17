import axios from "axios";

const api = axios.create({
  baseURL: process.env.MOVIE_API_URL,
  params: {
    apikey: process.env.MOVIE_API_KEY,
  },
});

export { api };
