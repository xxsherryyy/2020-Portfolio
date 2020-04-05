
import React from "react";
import Tilt from 'react-tilt';
import styles from './Tilter.module.scss';

const Tilter = ({ url }) => {
  return (
    <Tilt options={{ max: 10, scale: 1, reverse: true }} >
      <div className={styles.tilter} style={{ backgroundImage: `url(${url})` }}>
        <Tilt  style={{ height: "100%", width: "100%" }} options={{ max: 10, scale: 1 }}>
          <div className={styles.content}>
            <h1>Front End Developer</h1>
          </div>
        </Tilt>
      </div>
    </Tilt>
  );
}


export default Tilter;