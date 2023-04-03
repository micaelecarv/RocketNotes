import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-cjk9.onrender.com'
});
