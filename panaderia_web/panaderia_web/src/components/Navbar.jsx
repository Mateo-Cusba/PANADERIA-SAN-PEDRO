// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import logo from '../assets/images/logo.jpeg';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/menu', label: 'Menú' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/ubicacion', label: 'Ubicación' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src={logo} alt="Panadería San Pedro" className={styles.logo} />
          <span className={styles.brandName}>San Pedro</span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className={styles.ctaMobile}>
            <a href="https://wa.me/573106525559" target="_blank" rel="noreferrer" className="btn-primary">
              <FiPhone size={15} /> WhatsApp
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/573106525559"
          target="_blank"
          rel="noreferrer"
          className={`btn-primary ${styles.ctaDesktop}`}
        >
          <FiPhone size={15} /> WhatsApp
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
    </header>
  );
}
