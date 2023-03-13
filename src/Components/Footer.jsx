import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import Logo from "./Image/Logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
   (
    <footer className="footer">
    <Container>
      <Row className="align-item-center">
        <MailchimpForm />
        <Col sm={6}>
          <img src={Logo} alt="logo" />
        </Col>
        <Col sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="">
              <img src={FaLinkedin} />{" "}
            </a>
            <a href="">
              <img src={FaFacebookF} />{" "}
            </a>
            <a href="">
              <img src={FaInstagram} />{" "}
            </a>
          </div>
          <p>Copyright 2022. All Rigth Reserved</p>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}

export default Footer;
