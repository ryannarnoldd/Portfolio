import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Faith Tasks', img: 'FaithTasks', link: 'https://deployed-link.com', repo: 'https://github.com/repo' },
    { title: 'Galactic Conquest', img: 'GalacticConquest', link: 'https://deployed-link.com', repo: 'https://github.com/repo2' },
    { title: 'RyBot Discord Bot', img: 'RyBot', link: 'https://deployed-link.com', repo: 'https://github.com/repo3' },
    { title: 'EternityBot Discord Bot', img: 'EternityBot', link: 'https://deployed-link.com', repo: 'https://github.com/repo2' },
    { title: 'Lyric Generator', img: 'LyricGenerator', link: 'https://deployed-link.com', repo: 'https://github/com/repo4' },
    { title: 'Portfolio', img: 'Portfolio', link: 'https://deployed-link.com', repo: 'https://github/com/re"po5' }
  ];

  return (
    <section className="text-center">
      <h1>Portfolio</h1>
      <div className="row mt-4">
        {projects.map((project, index) => (
          <Project key={index} title={project.title} image={project.img} deployedLink={project.link} repoLink={project.repo} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;