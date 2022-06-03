import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import styles from './style/Navbar.module.css';

function Navbar() {
  return (
    <header>
      <h2 className="logo">BookStore CMS</h2>
      <ul className={styles.links}>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
      <VscAccount className={styles.account} />
    </header>
  );
}

export default Navbar;
