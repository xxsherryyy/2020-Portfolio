
import React from "react";

import './Layout.scss';

import { CirclePhoto, BgVideo, Tilter, Projects } from 'modules/components';
import { ReactComponent as Resume } from 'assets/svg/document.svg';
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg';
import { ReactComponent as Github } from 'assets/svg/github.svg';
import { ReactComponent as Mail } from 'assets/svg/envelope.svg';
import vue from 'assets/svg/vue.svg';
import react from 'assets/svg/react.svg';

import sherryFullBody from 'assets/images/sherry-full-body.jpeg';
import WordsMp4 from 'assets/videos/Words.mp4';
import bio from 'assets/images/bio.jpg';
import node from 'assets/images/node.jpeg';


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
            <h2> Web Developer • <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/xxsherryyy" >Designer</a> • Consultant </h2>
          
          </header>
          <div className="banner__photo">
            <CirclePhoto backText="Sherry Yang" url={bio} />
          </div>
        </div>
        <section className="about-me">
          <h3 className="heading-secondary u-margin-top-huge">Who Am I?</h3>
          <div className="about-me__content u-margin-top-big">
            <aside className="about-me__content--left">
              <h4 className="heading-primary--main">{`< Coder />`}</h4>
              <p className="paragraph">
              Hi, I'm Sherry a jill of all trades.
              I have a multidisciplinary background; B.S. Molecular Biology, Biomedical Electrial Engineering Reasearch, Full-Stack Development Certificate, and a professional history of service oriented work.
              <br/> 
              How did I go from science to coding? My journey into web development started in college where I became inspired to explore how technology plays an important role in society by a course called Science Technology and Institutions.
              I got a taste of concepts such as IOT, Smart Cities and platform technologies where we discected the evolution of technology from the invention of electricity and the birth of the world wide web to future 
              <br/>
              <b> React | Vue | Node  </b>
             
              </p> 
              <div className="skills">
                
             <img alt='react' src={react}/><img alt='vue' src={vue}/> <img alt='node' src={node}/>
              </div>
              
            </aside>
            <aside className="about-me__content--right">
              <Tilter url={sherryFullBody}/>
            </aside>
            <article className="about-me__content--bottom">
              <h4 className="heading-primary--main">Avid Traveler</h4>
              <p className="paragraph">
                 aliquid ducimus assumenda quasi laboriosam alias adipisci minima voluptates?
              </p>
            </article>
          </div>
        </section>
        <Projects/>
        <footer className="footer">
          <h4 className="heading-secondary">Connect with me</h4>
            <ul className="social">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sherry-x-yang/">
                  <Linkedin />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/xxsherryyy">
                  <Github />
                </a>
              </li>
              <li>
                <a target="_blank"  rel="noopener noreferrer" href="mailto: sherryxxyang@gmail.com">
                  <Mail />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="/../assets/images/Sherry Yang Resume.pdf" download="Sherry X Yang Resume">
                  <Resume />
                </a>
              </li>
            </ul>
        </footer>
     </main>
    );
}

export default LandingPageLayout;
