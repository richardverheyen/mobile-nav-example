import "./style.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/";
import Socials from "../Socials/";
import MobileMenu from "../MobileMenu/";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleBodyClick() {
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.body.classList.add('mobile-nav-open');
      document.querySelector('main').addEventListener('click', handleBodyClick);
      window.addEventListener('resize', handleBodyClick);

      window.addEventListener('hashchange', () => {console.log('navigation occurred');});

    } else {
      document.body.classList.remove('mobile-nav-open');
    }

    return () => {
      document.querySelector('main').removeEventListener('click', handleBodyClick);
      window.removeEventListener('resize', handleBodyClick);
    }
  }, [menuOpen]);

  useEffect(() => {
    // close the nav whenever the location changes
    setMenuOpen(false);
  }, [location]);

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
