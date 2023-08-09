import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import { HiShoppingBag } from "react-icons/hi";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.logo}>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/Zara-Emblem.jpg"
            alt="logo"
          />
        </div>
        <div className={styles.navMenu}>
          <ul>
            <Link to="/" className={styles.link}>
              <li className={styles.navItem}>Home</li>
            </Link>
            <Link to="/about" className={styles.link}>
              <li className={styles.navItem}>About Us</li>
            </Link>
            <Link to="/register" className={styles.link}>
              <li className={styles.navItem}>Register</li>
            </Link>
            <Link to="/login" className={styles.link}>
              <li className={styles.navItem}>Login</li>
            </Link>
            <Link to="/profile" className={styles.link}>
              <li className={styles.navItem}>Profile</li>
            </Link>
            <Link to="/cart" className={styles.link}>
              <li className={styles.navItem}>
                <HiShoppingBag />
                (0 items)
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
