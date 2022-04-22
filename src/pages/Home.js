import Navbar from "../components/Navbar";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpg";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="textOne">
        <p className="text">
          Avec RING PROJECT, créez votre propre bibliothèque numérique et
          emportez la partout avec vous à travers le monde !
        </p>
        <img src={img1} />
      </div>
      <div className="textOne">
        <img src={img2} />
        <p className="text">
          Pour cela, rien de plus simple, il vous suffit de créer un compte
        </p>
      </div>
    </div>
  );
}

export default Home;
