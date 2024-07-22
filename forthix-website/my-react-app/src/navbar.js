import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="menu">
  				<Link to="/"><img src="logo.png" alt="Forthix logo" className="logo"/></Link>
  				<Link to="/" className="menuoptions">Home</Link>
					<Link to="/learn" className="menuoptions">Learn</Link>
					<Link to="/faq" className="menuoptions">FAQ</Link>
          <a href="https://marketplace.atlassian.com/apps/1234620/orgjql?hosting=cloud&tab=overview" target="_blank" className="get-forthix-button">Get Forthix</a>
				</div>
    </nav>
  );
}