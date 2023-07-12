import rocketLogo from "../assets/rocket-logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Rocket Logo" />
      <div>
        <strong>to</strong>
        <strong>do</strong>
      </div>
    </header>
  );
}
