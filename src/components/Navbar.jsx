import { useEffect, useState } from "react";
import { FiMenu, FiX, FiZap } from "react-icons/fi";
import { LiaMedalSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import { about, navigation } from "../data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (location.pathname !== "/") return undefined;

    const sectionIds = navigation
      .map((item) => {
        const hashIndex = item.href.indexOf("#");
        return hashIndex >= 0 ? item.href.slice(hashIndex + 1) : null;
      })
      .filter(Boolean);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const setFromHash = () => {
      if (window.location.hash) setActiveHref(window.location.hash);
    };

    const setFromScroll = () => {
      const activationLine = window.scrollY + window.innerHeight * 0.5;
      const currentSection = sections.reduce((current, section) => {
        return section.offsetTop <= activationLine ? section : current;
      }, sections[0]);

      if (currentSection) {
        setActiveHref(`#${currentSection.id}`);
      }
    };

    if (window.location.hash) {
      setFromHash();
    } else {
      setFromScroll();
    }

    window.addEventListener("hashchange", setFromHash);
    window.addEventListener("scroll", setFromScroll, { passive: true });
    window.addEventListener("resize", setFromScroll);

    return () => {
      window.removeEventListener("hashchange", setFromHash);
      window.removeEventListener("scroll", setFromScroll);
      window.removeEventListener("resize", setFromScroll);
    };
  }, [location.pathname]);

  const getItemHash = (href) => {
    const hashIndex = href.indexOf("#");
    return hashIndex >= 0 ? href.slice(hashIndex) : null;
  };

  const isActive = (item) => {
    if (item.href.startsWith("/") && !item.href.includes("#")) {
      return location.pathname === item.href;
    }

    const hash = getItemHash(item.href);
    return location.pathname === "/" && activeHref === hash;
  };

  const handleNavClick = (href) => {
    const hash = getItemHash(href);
    if (hash) setActiveHref(hash);
    closeMenu();
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" to="/#home" onClick={closeMenu}>
          <span className="brand__mark">
            <LiaMedalSolid  aria-hidden="true" />
          </span>
          <span>{about.brand}</span>
        </Link>

        <ul className="nav-links">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                aria-current={isActive(item) ? "page" : undefined}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link className="nav-cta" to="/#contact">
          Let&apos;s Talk
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div className={`mobile-panel ${open ? "mobile-panel--open" : ""}`}>
        {navigation.map((item) => (
          <Link
            to={item.href}
            key={item.href}
            aria-current={isActive(item) ? "page" : undefined}
            onClick={() => handleNavClick(item.href)}
          >
            {item.label}
          </Link>
        ))}
        <Link className="mobile-panel__cta" to="/#contact" onClick={closeMenu}>
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
