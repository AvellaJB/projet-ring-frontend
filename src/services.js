import axios from "axios";
/* Notre fichiers services gère les connexion à notre BDD MongoDB */
const baseURL = "http://localhost:1664";

const base = axios.create({ baseURL });

/* Chaque fonction gère une requêtes HTTP différente (GET/ POST etc...) */
const services = {
  /* Cette fonction récupère la liste des livre de la BDD Mongo */
  getBookList() {
    return base.get("/bibliotheque").then((res) => res.data);
  },
  /* Cette fonction ajoute un livre à la BDD mongo */
  AddBook(body) {
    return base.post("/add-book", body).then((res) => res.data);
  },
  /* Cette fonction envoie les infos de connexions aux BACK END, la vérification
  des correspondance de mail / mdp se fait dans le back. */
  login(body) {
    return base.post("/login", body).then((res) => res.data);
  },
  register(body) {
    return base.post("/register", body).then((res) => res.data);
  },
};

export default services;
