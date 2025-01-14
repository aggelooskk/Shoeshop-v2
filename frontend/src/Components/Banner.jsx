import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="banner my-2 font-monospace">
      <div className="overlay"></div>
      <Container className="content">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="display-3 fw-bold mb-4 text-dark">
              Step into Style
            </h1>
            <p className="lead mb-4 fs-4 fw-bolder text-dark">
              Discover the latest trends in footwear with ShoeShop. Your style,
              your way.
            </p>
            <div className="d-flex justify-content-center">
              <Button
                variant="outline-dark"
                size="lg"
                className="me-3"
                href="/shop"
              >
                Shop Now
              </Button>
              <Button variant="outline-dark" size="lg">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;
