import axios from "axios";

const baseURL = "http://localhost:1664";

const base = axios.create({ baseURL });

const services = {
  getBookList() {
    return base.get("/bibliotheque").then((res) => res.data);
  },
  AddBook(body) {
    return base.post("/add-book", body).then((res) => res.data);
  },
  login(body) {
    return base.post("/login", body).then((res) => res.data);
  },
};

export default services;
