import Login from "../components/Login";
import Register from "../components/Register";

/* Notre page Connexion regroupe la possibilté de se register et de se login. 
L'objectif et d'afficher le Login et d'ajouter un bouton qui affichera le register
si pas de login possible. */

function Connexion({ setConnected }) {
  return (
    <div>
      <Login setConnected={setConnected} />
      <Register />
    </div>
  );
}

export default Connexion;
