import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <ul className="Socials">
      <Link to="/">
        <img src="/instagram-logo.png" alt="" />
      </Link>
      <Link to="/" className="gutters-right">
        <img src="/pinterest.png" alt="" />
      </Link>
    </ul>
  );
}
