import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li><Link to="/" className="navitem">Home</Link></li>
          <span>|</span>
          <li><Link to="/Calculator" className="navitem">Calculator</Link></li>
          <span>|</span>
          <li><Link to="/Quotes" className="navitem">Quotes</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
