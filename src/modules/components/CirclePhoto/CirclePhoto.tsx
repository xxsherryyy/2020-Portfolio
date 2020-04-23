
import React from "react";
import './CirclePhoto.scss';
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('assets/animations/stayHome.json'),
  rendererSettings: {
    preserveAsepctRation: 'xMidYMid slice'
  }
};
const CirclePhoto = ({ url, backText }) => {


    return (
      <div className="circlePhoto">
        <div className="photo">
          <div className="photo__side photo__side--front" style={{ backgroundImage: `url(${url})` }} >
          </div>
          <div className="photo__side photo__side--back">
            <Lottie  options={defaultOptions}
                     />
           
          </div>
        </div>
      </div>
    );
}


export default CirclePhoto;