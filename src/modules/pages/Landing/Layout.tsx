
import React from "react";

import './Layout.scss';

import { CirclePhoto, BgVideo, Tilter } from 'modules/components';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';

import sherryFullBody from 'assets/images/sherry-full-body.jpeg';
import WordsMp4 from 'assets/videos/Words.mp4';
// import WordsWebm from 'assets/videos/Words.webm';

const LandingPageLayout = () => {
    return (
      <main className="layout">
        <div className="banner">
          <BgVideo
            mp4={WordsMp4}
            webm={"https://storage.coverr.co/videos/Words?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc1NjYzNDIxfQ.EsW8io9E0rt0uX9qnPKvM0kziGNO0qqTL9zBgpCW5NM"}
          />
          <header className="banner__content">
            <h1>Sherry Yang</h1>
            <h2> Web Developer • Designer • Consultant </h2>
          </header>
          <div className="banner__photo">
            <CirclePhoto backText="Sherry Berry" url={"https://media.licdn.com/dms/image/C5103AQE7tWcFZX0TUQ/profile-displayphoto-shrink_800_800/0?e=1580947200&v=beta&t=MsbZckyx3T_msS8J5F67sIOLiFJDf7pG_5uNl18xeRs"} />
          </div>
        </div>
        <section className="about-me">
          <h3 className="heading-secondary u-margin-top-huge">Who Am I?</h3>
          <div className="about-me__content u-margin-top-big">
            <aside className="about-me__content--left">
              <h4 className="heading-primary--main">{`< Coder />`}</h4>
              <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sequi expedita repudiandae numquam ullam nemo blanditiis voluptas ipsum autem, obcaecati ipsa aliquid ducimus assumenda quasi laboriosam alias adipisci minima voluptates? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sequi expedita repudiandae numquam ullam nemo blanditiis voluptas ipsum autem, obcaecati ipsa aliquid ducimus assumenda quasi laboriosam alias adipisci minima voluptates?
              </p>
            </aside>
            <aside className="about-me__content--right">
              <Tilter url={sherryFullBody}/>
            </aside>
            <article className="about-me__content--bottom">
              <h4 className="heading-primary--main">And Dog Lover</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sequi expedita repudiandae numquam ullam nemo blanditiis voluptas ipsum autem, obcaecati ipsa aliquid ducimus assumenda quasi laboriosam alias adipisci minima voluptates? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sequi expedita repudiandae numquam ullam nemo blanditiis voluptas ipsum autem, obcaecati ipsa aliquid ducimus assumenda quasi laboriosam alias adipisci minima voluptates?
              </p>
            </article>
          </div>
        </section>
        <section className="projects u-margin-top-huge">
          <h4 className="heading-secondary">What I've done</h4>
          <ul>
            <li><img src="https://s3-media0.fl.yelpcdn.com/bphoto/0hevwZW-KGiCVJvSp7Ujog/o.jpg" /></li>
          </ul>
        </section>
        <footer className="footer">
          <h4 className="heading-secondary">Connect with me</h4>
          <ul className="social">
            <li><a href="#" rel="noopener noreferrer" target="_blank"><FacebookLogo /></a></li>
            <li><a href="#" rel="noopener noreferrer" target="_blank"><InstagramLogo /></a></li>
            <li><a href="#" rel="noopener noreferrer" target="_blank"><TwitterLogo /></a></li>
            <li><a href="#"><GoogleMail /></a></li>
          </ul>
        </footer>
     </main>
    );
}

export default LandingPageLayout;
