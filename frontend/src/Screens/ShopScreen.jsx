import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slices/productSlice";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";

const ShopScreen = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>Latest</Col>
          <Col>Casual</Col>
          <Col>Football</Col>
          <Col>Basket</Col>
          <Col>Tennis</Col>
          <Col>Running</Col>
          <Col>Golf</Col>
          <Col>Yoga</Col>
        </Row>
        <hr />
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ShopScreen;
