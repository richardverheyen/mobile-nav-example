import "./style.scss";
import Navigation from "../Navigation/";
import Socials from "../Socials/";

export default function MobileMenu({menuOpen}) {
  return (
    <aside className={`MobileMenu ${menuOpen ? "open" : ""}`}>
      <div className="gutters">
        <Navigation />
        <Socials />
      </div>
    </aside>
  );
}
