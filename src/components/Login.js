import { useState } from "react";
import services from "../services";

function Login({ setConnected }) {
  const [body, setBody] = useState({
    mail: "",
    password: "",
    pseudo: "",
  });

  function updateBody(key, value) {
    setBody({ ...body, [key]: value });
  }

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
