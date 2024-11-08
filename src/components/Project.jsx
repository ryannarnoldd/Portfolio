import EternityBotImage from '../assets/Eternity-Bot.png';
import FaithTasksImage from '../assets/Faith-Tasks.png';
import GalacticConquestImage from '../assets/Galactic-Conquest.png';
import RyBotImage from '../assets/Ry-Bot.png';
import LyricGeneratorImage from '../assets/Lyric-Generator.png';
import PortfolioImage from '../assets/Portfolio.png';

// This will be used to display the project images.
// It takes the name of the project as a string and returns the corresponding image.
const images = {
  "Eternity Bot": EternityBotImage,
  "Faith Tasks": FaithTasksImage,
  "Galactic Conquest": GalacticConquestImage,
  "Ry Bot": RyBotImage,
  "Lyric Generator": LyricGeneratorImage,
  "Portfolio": PortfolioImage
};

function Project({ title, deployedLink, repoLink }) {
  return (
    <div className="col-md-6">
      <div className="card mb-4">
        <img src={images[title]} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href={deployedLink} className="btn btn-primary">Deployed Link</a>
          <a href={repoLink} className="btn btn-secondary">Repository</a>
        </div>
      </div>
    </div>

  );
}

export default Project;