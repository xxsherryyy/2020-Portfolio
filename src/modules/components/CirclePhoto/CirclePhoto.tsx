
import React from "react";
import './CirclePhoto.scss';

const CirclePhoto = ({ url, backText }) => {
    return (
      <div className="circlePhoto">
        <div className="photo">
          <div className="photo__side photo__side--front" style={{ backgroundImage: `url(${url})` }} >
          </div>
          <div className="photo__side photo__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
            <h3 className="heading-tertiary">Click for dark mode</h3>
          </div>
        </div>
      </div>
    );
}


export default CirclePhoto;