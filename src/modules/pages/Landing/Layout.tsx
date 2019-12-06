
import React from "react";

import './Layout.scss';
// import WordsMp4 from 'assets/videos/Words.mp4';
// import WordsWebm from 'assets/videos/Words.webm';

import { CirclePhoto, BgVideo } from 'modules/components';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';

export default class LandingPageLayout extends React.Component {

  render() {
    return (
      <main className="layout">
        <div className="banner">
          <BgVideo
            mp4={"https://storage.coverr.co/videos/Words?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc1NjYzNDIxfQ.EsW8io9E0rt0uX9qnPKvM0kziGNO0qqTL9zBgpCW5NM"}
            webm={"https://storage.coverr.co/videos/Words?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc1NjYzNDIxfQ.EsW8io9E0rt0uX9qnPKvM0kziGNO0qqTL9zBgpCW5NM"}
          />
          <div className="banner__content">
            <h1>Sherry Yang</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="banner__photo">
            <CirclePhoto url={"https://media.licdn.com/dms/image/C5103AQE7tWcFZX0TUQ/profile-displayphoto-shrink_800_800/0?e=1580947200&v=beta&t=MsbZckyx3T_msS8J5F67sIOLiFJDf7pG_5uNl18xeRs"} />
          </div>
        </div>
        {/* <ul className="social">
          <li><a href="#" rel="noopener noreferrer" target="_blank"><FacebookLogo /></a></li>
          <li><a href="#" rel="noopener noreferrer" target="_blank"><InstagramLogo /></a></li>
          <li><a href="#" rel="noopener noreferrer" target="_blank"><TwitterLogo /></a></li>
          <li><a href="#"><GoogleMail /></a></li>
        </ul> */}
     </main>
    );
  }
}
