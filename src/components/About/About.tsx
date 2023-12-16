import "./About.css";

const About = () => {
  return (
    <div className="container" id="about">
      <h1 className="about-title">
        <span className="list-style font-space-mono">01.</span>About Me
      </h1>
      <div className="about-description">
        <div className="about-content">
          <p>Hello! I'm fazzal, a Software Developer based in Pakistan.</p>
          <p>I love crafting sleek applications for the web and mobile.</p>
          <p>My goal is to build scalable, high-performance products.</p>
          <br />
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skill-list">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJs</li>
            <li>NextJs</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
