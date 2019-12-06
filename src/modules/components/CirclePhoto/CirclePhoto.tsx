
import React from "react";
import styles from './CirclePhoto.module.scss';

const CirclePhoto = ({ url }) => {
    return (
      <div
        className={styles.circlePhoto}
      >
        {/* <img src={url} style={{ height: "100%", width: "100%", borderRadius: "50%"}}/> */}
        <div className={styles.img} style={{ backgroundImage: `url(${url})`}}></div>
      </div>
    );
}


export default CirclePhoto;