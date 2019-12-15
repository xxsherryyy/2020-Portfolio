
import React from "react";
import './CirclePhoto.scss';

const CirclePhoto = ({ url, backText }) => {
    return (
      <div className="circlePhoto">
        <div className="card">
          <div className="card__side card__side--front" style={{ backgroundImage: `url(${url})` }} >
          </div>
          <div className="card__side card__side--back">
            <h3 className="heading-tertiary">"{backText}"</h3>
          </div>
        </div>
      </div>
    );
}


export default CirclePhoto;