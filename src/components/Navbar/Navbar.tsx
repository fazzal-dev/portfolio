import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li>
          <span className="font-space-mono list-style">01.</span>
          <a href="#about">About</a>
        </li>
        <li>
          <span className="font-space-mono list-style">02.</span>
          <a href="#">Projects</a>
        </li>
        <li>
          <span className="font-space-mono list-style">03.</span>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
