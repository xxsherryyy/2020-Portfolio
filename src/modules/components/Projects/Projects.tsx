import React from 'react';

import detective from 'assets/images/detective.png';
import bnsf from 'assets/images/bnsf.jpg';
import hp from 'assets/images/hp.jpg';
import primesource from 'assets/images/primesource.jpg';
import ratethatdev from 'assets/images/ratethatdev.png';
import swapa from 'assets/images/swapa.jpg'

const Projects = () => {
    return (
        <section className="projects u-margin-top-huge">
        <h4 className="heading-secondary">What I've done</h4>
        
        <ul className="projects__list">
          <li><img alt="Title Max" src="https://s3-media0.fl.yelpcdn.com/bphoto/0hevwZW-KGiCVJvSp7Ujog/o.jpg" /></li>
          <li><img alt="Detective" src={detective} /></li>
          <li><img alt="HP" src={hp} /></li>
          <li><img alt="PrimeSource" src={primesource} /></li>
          <li><img alt="SWAPA" src={swapa} /></li>
          <li><img alt="Rate That Dev " src={ratethatdev} /></li>
          <li><img alt="BNSF" src={bnsf} /></li>
        </ul>
      </section>
    );
}


export default Projects;