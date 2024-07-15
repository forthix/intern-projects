import './Navbar.css';
import logo from './logo.png';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="menu">
  				<a href="/"><img src={logo} alt="Forthix logo" className="logo"/></a>
  				<a href="/" class="menuoptions">Home</a>
					<a href="/learn" class="menuoptions">Learn</a>
					<a href="/faq" class="menuoptions">FAQ</a>
          <a href="https://marketplace.atlassian.com/apps/1234620/orgjql?hosting=cloud&tab=overview" target="_blank" className="get-forthix-button">Get Forthix</a>
				</div>
    </nav>
  );
}