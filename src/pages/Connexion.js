import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

function Connexion({ setConnected }) {
  return (
    <div>
      <Login setConnected={setConnected} />
      <Register />
    </div>
  );
}

export default Connexion;
