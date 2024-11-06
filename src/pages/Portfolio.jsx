import Project from '../components/Project';

function Portfolio() {
  // List of projects with title, image, deployed link, and repository link.
  const projects = [
    { title: 'Faith Tasks', img: 'FaithTasks', link: 'https://faithtasks.netlify.app/', repo: 'https://github.com/ryannarnoldd/FaithTasks' },
    { title: 'Galactic Conquest', img: 'GalacticConquest', link: 'https://www.youtube.com/watch?v=gXRVlogzmfA', repo: 'https://github.com/ryannarnoldd/GalacticConquestProject' },
    { title: 'RyBot Discord Bot', img: 'RyBot', link: 'https://github.com/ryannarnoldd/ryBot', repo: 'https://github.com/ryannarnoldd/ryBot' },
    { title: 'EternityBot Discord Bot', img: 'EternityBot', link: 'https://github.com/ryannarnoldd/EternityBot', repo: 'https://github.com/ryannarnoldd/EternityBot' },
    { title: 'Lyric Generator', img: 'LyricGenerator', link: 'http://nlp-lyric-generator.us-east-1.elasticbeanstalk.com/', repo: 'https://github.com/ryannarnoldd/NLP_Lyric_Generator' },
    { title: 'Portfolio', img: 'Portfolio', link: 'https://ryan-arnold-portfolio.netlify.app/', repo: 'https://github.com/ryannarnoldd/Portfolio' }
  ];

  return (
    <section className="text-center">
      <h1>Portfolio</h1>
      <div className="row mt-4">
        {projects.map((project, index) => (
          // Uses the Project component to display each project.
          <Project key={index} title={project.title} image={project.img} deployedLink={project.link} repoLink={project.repo} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;