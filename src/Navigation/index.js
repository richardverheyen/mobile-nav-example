import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
