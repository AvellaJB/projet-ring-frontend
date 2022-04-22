import React from "react";

function Register() {
  return (
    <div>
      <form>
        <h1>Register</h1>
        <label>Pseudo</label>
        <input type="text" name="pseudo" value="pseudo" />
        <label>Email</label>
        <input type="email" name="email" value="email@gmail.com" />
        <label>Password</label>
        <input type="password" name="password" value="password" />
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value="password" />
        <button>Envoyer</button>
      </form>
    </div>
  );
}

export default Register;
