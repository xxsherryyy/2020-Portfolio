import React, { Component } from 'react';
import { MainLayout } from 'modules/layouts';
import LandingPageLayout from './Layout';


interface LandingPageProps {}
class LandingPage extends Component<LandingPageProps> {
  componentDidMount() {
    console.log("Componenet Did Mount")
  }
  render() { 
       
    return (
      
      <MainLayout>
       
        <LandingPageLayout/> 
         
      </MainLayout>
    );
  }
}


export default LandingPage;