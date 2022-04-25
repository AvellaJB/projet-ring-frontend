import React from "react";
import { useState } from "react";
import services from "../services";
import "./Register.css";

function Register() {
  const [body, setBody] = useState({
    mail: "",
    password: "",
    pseudo: "",
    confirmPassword: "",
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
      .register(body)
      .then(() => {
        console.log("User Created.");
      })
      .catch((err) => {
        console.log(err);
        console.log("Register failed.");
      });
  }

  return (
    <div>
      <form
        className="formRegister"
        onSubmit={handleSubmitLogin}
        onChange={handleChangeInput}
      >
        <h1>... non, alors faisons connaissance !</h1>
        <input
          className="inputRegister"
          placeholder="Votre pseudo"
          type="text"
          name="pseudo"
        />
        <input
          className="inputRegister"
          placeholder="Votre email"
          type="email"
          name="mail"
        />
        <input
          className="inputRegister"
          placeholder="Votre mot de passe"
          type="password"
          name="password"
        />
        <input
          className="inputRegister"
          placeholder="Confirmez votre mot de passe"
          type="password"
          name="confirmPassword"
        />
        <button className="buttonRegister">Envoyer</button>
      </form>
    </div>
  );
}

export default Register;
