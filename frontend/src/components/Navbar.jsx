import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <Nav className="justify-content-evenly new py-3 text-black">
      <Link to="/">
        <img src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png" alt="Logo" height="40" width="auto" />
      </Link>
      <Nav.Item>
        <Link to="/" className="nav-link custom-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/form" className="nav-link custom-link">Form</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" className="nav-link custom-link">About</Link>
      </Nav.Item>
    </Nav>
  </>
  );
}

export default Navbar;
