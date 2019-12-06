
import React from "react";
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
      <div className={styles.navBar}>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    );
}


export default NavBar;