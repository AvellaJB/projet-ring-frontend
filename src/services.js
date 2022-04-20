import axios from "axios";

const baseURL = "http://localhost:1664";

const base = axios.create({ baseURL });

const services = {
  getBookList() {
    return base.get("/bibliotheque").then((res) => res.data);
  },
};

export default services;
