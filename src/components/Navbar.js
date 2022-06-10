import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from './style/Navbar.module.css';

function Navbar() {
  const [color, setColor] = React.useState({
    books: true,
    category: false,
  });
  const style = {
    opacity: 1,
  };

  const hanleBooks = () => {
    setColor({
      books: true,
      category: false,
    });
  };

  const hanleCategory = () => {
    setColor({
      books: false,
      category: true,
    });
  };
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Bookstore CMS</p>
      <ul className={styles.links}>
        <li>
          <Link
            className={styles.link}
            to="/"
            style={color.books ? style : null}
            onClick={hanleBooks}
          >
            BOOKS
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/categories"
            style={color.category ? style : null}
            onClick={hanleCategory}
          >
            CATEGORIES
          </Link>
        </li>
      </ul>
      <div className={styles.userCircle}>
        <ImUser className={styles.account} />
      </div>
    </header>
  );
}

export default Navbar;
