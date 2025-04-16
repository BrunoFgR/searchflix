import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: process.env.API_KEY,
  },
});

export { api };
