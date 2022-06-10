import "./style.scss";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/";
import Socials from "../Socials/";
import MobileMenu from "../MobileMenu/";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleBodyClick() {
      console.log('body clicked!');
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.body.classList.add('mobile-nav-open');
      document.querySelector('main').addEventListener('click', handleBodyClick);
      window.addEventListener('resize', handleBodyClick);

    } else {
      document.body.classList.remove('mobile-nav-open');
    }

    return () => {
      document.querySelector('main').removeEventListener('click', handleBodyClick);
      window.removeEventListener('resize', handleBodyClick);
    }
  }, [menuOpen])

  return (
    <header id="Header">
      <div className="gutters">
        <Navigation />
        <Socials />

        <div id="blur"></div>
        <MobileMenu menuOpen={menuOpen} />

        <button 
          className="burger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}>
          <img src="/hamburger.png" alt="menu" />
        </button>
      </div>
    </header>
  );
}
