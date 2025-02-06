import React from "react";
import styles from "./Header.module.css";
import { useAuth } from "../../contexts/authContext";

export default function Header() {
  const { handleLogout } = useAuth();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <a href="/" className={styles.logo}>
            react space
          </a>
          <nav className={styles.nav_panel}>
            <button className={`button button_danger`} onClick={handleLogout}>
              Выйти
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
