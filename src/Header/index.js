import "./style.scss";
import Navigation from "../Navigation/";
import Socials from "../Socials/";
import MobileMenu from "../MobileMenu/";

export default function Header() {
  return (
    <header id="Header">
      <div className="gutters">
        <Navigation />
        <Socials />

        <MobileMenu />
        <button className="burger">
          <img src="/hamburger.png" alt="menu" />
        </button>
      </div>
    </header>
  );
}
