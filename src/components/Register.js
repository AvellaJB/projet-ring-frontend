import React from "react";
import { useState } from "react";
import services from "../services";

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
      <form onSubmit={handleSubmitLogin} onChange={handleChangeInput}>
        <h1>Register</h1>
        <label>Pseudo</label>
        <input type="text" name="pseudo" />
        <label>Email</label>
        <input type="email" name="mail" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" />
        <button>Envoyer</button>
      </form>
    </div>
  );
}

export default Register;
