import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="nav">
      <div className="menu">
        <Link to="/"><img src={logo} alt="Forthix logo" className="logo"/></Link>
        <Link to="/" className="menuoptions">Home</Link>
        <div className="dropdown">
          <button className="dropbtn menuoptions">Learn</button>
          <div className="dropdown-content">
            <a href="blog.com" target="_blank" rel="noopener noreferrer">Read</a> {/* Replace with your blog URL */}
            <a href="https://youtube.com/@forthixllc?si=nLlETF--WHM6L342" target="_blank" rel="noopener noreferrer">Watch</a>
          </div>
        </div>
        <Link to="/faq" className="menuoptions">FAQ</Link>
        <a href="https://marketplace.atlassian.com/apps/1234620/orgjql?hosting=cloud&tab=overview" target="_blank" className="get-forthix-button">Get Forthix</a>
      </div>
    </nav>
  );
}

export default Navbar;