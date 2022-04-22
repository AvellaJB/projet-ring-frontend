import { useState } from "react";
import services from "../services";

function Login({ setConnected }) {
  /* On décide de stocker les infos du formulaire dans un State. */

  const [body, setBody] = useState({
    mail: "",
    password: "",
    pseudo: "",
  });

  /* Pour mettre à jour notre body. On récupère l'object déjà existant et on ajoute
  la valeurs aux différentes clés (mail : test@mail.com) */
  function updateBody(key, value) {
    setBody({ ...body, [key]: value });
  }

  /* Récupère simplement l'input dans le e.target. */

  function handleChangeInput(e) {
    const { name, value } = e.target;
    updateBody(name, value);
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    services
      .login(body)
      .then(() => {
        localStorage.setItem("connected", true);
        setConnected(true);
      })
      .catch((err) => {
        console.log(err.response);
        alert("Did not work");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmitLogin} onChange={handleChangeInput}>
        <h1>Login</h1>
        <label>Email</label>
        <input type="email" name="mail" />
        <label>Pseudo</label>
        <input type="text" name="pseudo" />
        <label>Password</label>
        <input type="password" name="password" />
        <button>Envoyer</button>
      </form>
    </div>
  );
}

export default Login;
