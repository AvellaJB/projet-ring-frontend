import "./Home.css";
import heroimg from "../pages/heroimg.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="presentation-section">
          <div className="presentation-text">
            <div className="presentation-title">
              <h1>Bienvenue sur RING Project</h1>
            </div>
            <div className="presentation-description">
              <h2>
                Gérez votre biblothèque et partagez vos livres. Simplement.
              </h2>
            </div>
            <div className="CTA">
              <button>
                Get Started <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="hero-section">
          <div className="hero-img">
            <img src={heroimg} alt="reading woman" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
