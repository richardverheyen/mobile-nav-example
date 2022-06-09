import "./style.scss";
import Navigation from "../Navigation/";
import Socials from "../Socials/";

export default function MobileMenu() {
  return (
    <aside className="MobileMenu open">
      <div className="gutters">
        <Navigation />
        <Socials />
      </div>
    </aside>
  );
}
