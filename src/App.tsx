import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img
          src="/images/video-player.png"
          className={styles.logo}
          alt="logo"
        />
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
