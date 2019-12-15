
import React from "react";
// import Tilt from 'react-parallax-tilt';
import './Tilter.scss';

const Tilter = ({ url }) => {
  return (
    // <Tilt>
      <div className="tilter" style={{ backgroundImage: `url(${url})` }}>
        {/* <h1>Sherry Berry</h1> */}
      </div>
    // </Tilt>
  );
}


export default Tilter;