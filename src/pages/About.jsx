import RyanImage from "../assets/Ryan.png";

function About() {
  return (
    <section className="text-center">
      <img src={RyanImage} className="my-2" style={{ width: "30%" }} alt="Ryan Arnold" />
      <h1>About Me</h1>
      <p className="mt-3">
        Hello, my name is Ryan Arnold. 
        I am a web developer with a passion for creating responsive, user-friendly websites. 
        I have a bacholers degree in Computer Science and am completing a coding bootcamp through the University of Central Florida.
        I have experience with HTML, CSS, JavaScript, and React. I am excited to leverage my skills to build engaging websites and applications.
      </p>
    </section>
  );
}

export default About;