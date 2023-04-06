import {useState, useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';

import Header from './components/Header';
import Properties from './components/Properties';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <section className="head mb-5">
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="mb-5">
          <Col md="12">
            <Properties />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md="12">
            <About />
          </Col>
        </Row>
      </Container>
      <section className="foot">
        <Container>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
