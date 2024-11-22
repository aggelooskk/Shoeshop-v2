import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Image, Row, Col } from "react-bootstrap";
import { fetchProducts } from "../Slices/productSlice";
import { Spinner } from "react-bootstrap";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);

  return (
    <>
      <Carousel
        slide={true}
        className="py-1 my-5 justify-content-center align-items-center"
      >
        {products.map((product, index) => (
          <Carousel.Item key={index}>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={6}>
                <Image
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  fluid
                />
              </Col>
              <Col md={6} className="text-start">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ProductCarousel;