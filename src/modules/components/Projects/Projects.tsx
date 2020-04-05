import React from 'react';

import detective from 'assets/images/detective.png';
import bnsf from 'assets/images/bnsf.jpg';
import hp from 'assets/images/hp.jpg';
import primesource from 'assets/images/primesource.jpg';
import ratethatdev from 'assets/images/ratethatdev.png';
import swapa from 'assets/images/swapa.jpg'
import  './Projects.scss';

const Projects = () => {
    return (
        <section className="projects u-margin-top-huge">
        <h4 className="heading-secondary">What I've done</h4>
        
        <ul className="projects__list">
          <li className="card">
            <div className="card__side card__side--front">
              <img alt="Title Max" src="https://s3-media0.fl.yelpcdn.com/bphoto/0hevwZW-KGiCVJvSp7Ujog/o.jpg" />
            </div>
              <div className="card__side card__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
                <h3 className="heading-tertiary">TitleMax</h3>
              </div>
          </li>
          
          <li className="card">
            <div className="card__side card__side--front">
              <img alt="Detective" src={detective} />
            </div>
            <div className="card__side card__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
            <h3 className="heading-tertiary">Concert Detectives</h3>
            </div>
          </li>

          <li className="card">
          <div className="card__side card__side--front">
              <img alt="HP" src={hp} />
              </div>
              <div className="card__side card__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
            <h3 className="heading-tertiary">Harry Potter</h3>
            </div>
              </li>

              <li className="card">
          <div className="card__side card__side--front">
              <img alt="Prime Source" src={primesource} />
              </div>
              <div className="card__side card__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
            <h3 className="heading-tertiary">Prime Source</h3>
            </div>
              </li>

              <li className="card">
          <div className="card__side card__side--front">
              <img alt="SWAPA" src={swapa} />
              </div>
              <div className="card__side card__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
            <h3 className="heading-tertiary">South West Airlines Pilots Association</h3>
            </div>
              </li>

              <li className="card">
            <div className="card__side card__side--front">
              <img alt="Rate That Dev" src={ratethatdev} />
            </div>
              <div className="card__side card__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
                <h3 className="heading-tertiary">Rate That Dev</h3>
              </div>
          </li>

          <li className="card">
            <div className="card__side card__side--front">
              <img alt="BNSF" src={bnsf} />
            </div>
              <div className="card__side card__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
                <h3 className="heading-tertiary">BNSF</h3>
              </div>
          </li>
        </ul>
      </section>
    );
}


export default Projects;