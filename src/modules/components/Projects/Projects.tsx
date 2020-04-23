import React from 'react';

import detective from 'assets/images/detective.png';
import bnsf from 'assets/images/bnsf.jpg';
import hp from 'assets/images/hp.jpg';
import primesource from 'assets/images/primesource.jpg';
import ratethatdev from 'assets/images/ratethatdev.png';
import swapa from 'assets/images/swapa.jpg'
import firebase from 'assets/images/firebase.png'
import gatsby from 'assets/svg/gatsby.svg'
import './Projects.scss';

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
            <div className="modal">

              <p><b> Vue | Node | AWS S3 | Lambda | Cognito | Dynamo DB | API Gateway </b></p>
              <p>•  Streamlined web and mobile platform for personal loan approval application, which generated 7 billion in revenue</p>
              <p>•	Created reusable and modular UI components on enterprise level web applications, following Agile methodology </p>
              <p>•	Developed Vue custom component library on the front-end with responsive UI and cross browser detection</p>
              <p>•	Invoked asynchronous AWS Lambdas with back-end API endpoints and integrated 3rd party API’s with SOAP to REST calls through the API Gateway on AWS’s serverless CI/CD pipeline</p>
              <p>•	Configured Cognito user pools to streamline mobile and web platform for unique user profile identification</p>
              <p>•	Resolved deployment and debugged code with AWS CloudWatch logs to deliver continuous business value</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className="card__side card__side--front">
            <img alt="BNSF" src={bnsf} />
          </div>
          <div className="card__side card__side--back">
            <div className="modal">
              <p><b> SAFe DevOps | PI Planning | Agile Release Train </b></p>
              <p>●	Assisted SAFe RTE with 2 day PI Planning to align Agile Release Train with time sensitive national railway software releases which resulted in successful timely incremental delivery</p>
              <p>●	Facilitated team breakout questions, maintained timely schedule confidence voting and retrospective</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card__side card__side--front">
            <img alt="Prime Source" src={primesource} />
          </div>
          <div className="card__side card__side--back">

            <div className="modal">

              <p><b> | React | Typescript | Node | Knex | MS SQL </b></p>

              <p>•	Solely responsible for site reliability and code changes for a tradeshow event which generated 40 million in 1 day</p>
              <p>•	Debugged legacy code and optimized application speed 10X based on JMeter stress test</p>
              <p>•	Parsed through data structures with higher order functions and validated with custom Regex </p>
              <p>•	Solutioned at show hotfixes, troubleshooted security blocks and supported database querying and ETL</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className="card__side card__side--front">
            <img alt="SWAPA" src={swapa} />
          </div>
          <div className="card__side card__side--back">

            <div className="modal">

              <p><b>Azure DevOps | VISIO | LEAN </b></p>
              <p>•	Created and managed Azure DevOps pipeline for mobile app; wrote user stories from product owner's acceptance criteria</p>
              <p>•	Optimized organization augmentatinon workflows with Lean methodology utilizing VISIO to demonstrate to management and leadership </p>

              <p>•	Mitigated app degradation with major incident reports and post-mortem documentation to pinpoint and resolved infrastructure weaknesses within 24 hours of detection</p>

            </div>

          </div>
        </li>

        <li className="card">
          <div className="card__side card__side--front">
            <img alt="Rate That Dev" src={ratethatdev} />
          </div>
          <div className="card__side card__side--back">
            <div className="modal">
              <p><b> React | Node.js | Express | Mongoose | JSON Web Token | Passport | Axios </b></p>                                  Jul 2018
<p>A developer rating system that features skill evaluation for developers and customized search function for recruiters</p>
              <p>•	Designed, prototyped and developed MERN stack app UI with a group of 4 and completed in 4 weeks</p>
              <p>•	Built reusable JSX components and modal functions, and routed data values to backend with Mongoose storage</p>
              <p>Designed UI and prototyped using Adobe XD
              Developed full-stack MERN app utilizing JSX Built
              components and modal functions, and routed data
values to back-end Mongoose storage.</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className="card__side card__side--front">
            <img alt="HP" src={hp} />
          </div>
          <div className="card__side card__side--back">
            <div className="modal">
              <p><b> JavaScript | Ticket Master API | Bootstrap | Tachyons </b></p>
              <p>Utilized MVC model and pulled front end response data into MySQL database through Sequelize.js</p>
              <p>Integrated modals through Bootstrap</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className="card__side card__side--front">
            <img alt="Detective" src={detective} />
          </div>
          <div className="card__side card__side--back">
            {/* <h3 className="heading-tertiary">"{backText}"</h3> */}
            <h3 className="heading-tertiary">Concert Detectives</h3>
            <div className="modal">

              <p><b>Azure DevOps | VISIO</b></p>
              <p> Utilized Bootstrap, CSS and Tachyons library to integrate responsive framework</p>
              <p>Integrated Google Maps API as an interactive component to complement visual assessment</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className="card__side card__side--front">
            <img alt="Detective" src={firebase} />
          </div>
          <div className="card__side card__side--back">
            <div className="modal">

              <p><b>Firebase Scheduler</b></p>
              <p> Utilized Bootstrap, CSS and Tachyons library to integrate responsive framework</p>
              <p>Integrated Google Maps API as an interactive component to complement visual assessment</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className="card__side card__side--front">
            <img alt="Detective" src={gatsby} />
            </div>
          <div className="card__side card__side--back">
          <div className="modal">
           <p><b>Gatsby</b></p>
           <p>LINK</p> 
         
            </div>
          </div>
        </li>

      </ul>
    </section>
  );
}


export default Projects;