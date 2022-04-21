import axios from "axios";

const baseURL = "https://openlibrary.org/isbn/";

const base = axios.create({ baseURL });

const ISBNApi = {
  getDetailsFromISBN(ISBN) {
    return base.get(`/${ISBN}.json`).then((res) => res.data);
  },
};

export default ISBNApi;
