
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from 'react-bootstrap';

function Hero() {

  return (
    <div className="Hero">
      <Row>
        <Col md="7" className="text-left">
          <Row>
            <Col md="8">
          <h1>A home is built with love and dreams</h1>
          <p>Real estate farm that makes your dreams true</p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Button variant="primary">Our projects</Button>
            </Col>

            <Col md="3">
              <Button variant="secondary">Contact Us</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
