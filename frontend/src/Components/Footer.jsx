import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto font-monospace">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5>ShoeShop</h5>
            <p>Your ultimate destination for top-quality footwear.</p>
            <div className="d-flex">
              <Nav.Link href="https://facebook.com" className="text-light me-3">
                <FaFacebook size={24} />
              </Nav.Link>
              <Nav.Link href="https://twitter.com" className="text-light me-3">
                <FaTwitter size={24} />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" className="text-light">
                <FaInstagram size={24} />
              </Nav.Link>
            </div>
          </Col>
          <Col md={2}>
            <h6>Quick Links</h6>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-light">
                About
              </Nav.Link>
              <Nav.Link href="/contact" className="text-light">
                Contact
              </Nav.Link>
              <Nav.Link href="/shop" className="text-light">
                Shop
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h6>Customer Service</h6>
            <Nav className="flex-column">
              <Nav.Link href="/faq" className="text-light">
                FAQ
              </Nav.Link>
              <Nav.Link href="/returns" className="text-light">
                Returns
              </Nav.Link>
              <Nav.Link href="/shipping" className="text-light">
                Shipping
              </Nav.Link>
              <Nav.Link href="/terms" className="text-light">
                Terms & Conditions
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h6>Contact Us</h6>
            <p>
              <FaPhone className="me-2" />
              +1 234 567 890
            </p>
            <p>
              <FaEnvelope className="me-2" />
              support@shoeshop.com
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <small>&copy; ShoeShop, 2024. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
