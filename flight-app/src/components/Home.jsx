import React from 'react';
import { Container, Row, Col, Carousel, Card, Button, Alert } from 'react-bootstrap';

import Adcontent from './Adcontent';
import biggy from '../images/biggy.png'
import lock from '../images/lock.png'
import clock from '../images/clock.png'
import '../App.css'
import Adtext from './Adtext';
import Payboost from './Payboost';
import Header from './Header';
import Footer from './Footer';
import Adcards from './Adcards';
import Carousels from './Carousels';
import AdCards from './Adsec';
function HomePage() {
  return (
    <div>
      <Header/>

       {/* Carousel Section */}
      <Carousels/>

    <Container>
      
      {/* Adcontent */}
      
      <Adcontent/>

      {/* Advertisement Section */}
      <AdCards/>
      {/* Contents */}

      <Row>
         <Col>
           <Adtext/>
         </Col>
      </Row>
      
      {/* Payments */}
      
      <Row>
        <Col>
           <Payboost/>
        </Col>
      </Row>
      
       <Adcards/>

      {/* Footer Section */}
    </Container>
    <Footer/>
    </div>
  );
}

export default HomePage;
