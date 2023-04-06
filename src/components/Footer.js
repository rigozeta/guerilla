import logo_white from '../assets/logo-white.png';
import icon_pin from '../assets/icon_pin.png';
import icon_phone from '../assets/icon_phone.png';
import icon_mail from '../assets/icon_mail.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

function Footer() {

  return (
    <div className="Footer">
      <Row className="mt-6">
        <Col md="6" className="text-left">
          <img src={logo_white} alt="Lugar Logo" title="Lugar"/>
          <ul>
            <li><img src={icon_pin} alt="address" title="address" /> 2118 Thornridge Cir. Dubai, UAE 35624</li>
            <li><img src={icon_phone} alt="phone" title="phone" /> +33 415 65356 - 9</li>
            <li><img src={icon_mail} alt="email" title="email" /> contact@lugar.com</li>
          </ul>

        </Col>
        <Col md="3" className="text-left">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </Col>
        <Col md="3" className="text-left">
          <h3>Legal Links</h3>
          <ul>
            <li>Terms</li>
            <li>Conditions</li>
            <li>Policy</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-3 mt-6">
        <Col className="text-left">
          Copyright @ 2022 Lugar Inc.
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
