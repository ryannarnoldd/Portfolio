function Resume() {
  return (
    <section className="text-center">
      <h1>My Resume</h1>
      <a href="../assets/Ryan_Arnold_Resume.pdf" download className="btn btn-info mt-3">Download My Resume</a>
      <div className="mt-4">
        <h3>Proficiencies</h3>
        <ul className="list-unstyled">
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML & CSS</li>
        </ul>
        <h3>Experience</h3>
        <p>Attractions - Walt Disney World</p>
        <p>Position: Attractions Cast Member</p>
        <p>Duration: 2018 - 2021</p>
        <p>Chief Technology Officer - Rycor HVAC</p>
      </div>
    </section>
  );
}

export default Resume;