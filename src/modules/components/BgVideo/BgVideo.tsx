
import React from "react";
import './BgVideo.scss';

// set containing element position to relative

const BgVideo = ({ mp4, webm }) => {
    return (
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
    );
}


export default BgVideo;