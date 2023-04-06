import about_bg from '../assets/about-bg.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

function About() {

  return (
    <div className="About text-left">
      <Row>
        <Col md="6">
          <img src={about_bg} className="img-fluid" title="About" alt="About" />
        </Col>
        <Col md="6" className="mt-6">
          <h2>Award winning real estate company in Dubai</h2>
          <h4 className="mb-3">Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</h4>
          <Row>
            <Col md="4">
              <h5>Previous Projects</h5>
              <h3>34+</h3>
            </Col>
            <Col md="4">
              <h5>Years Experience</h5>
              <h3>20y</h3>
            </Col>
            <Col md="4">
              <h5>Ongoing Projects</h5>
              <h3>12</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default About;
