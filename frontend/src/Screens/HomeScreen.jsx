import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import { fetchProducts } from "../Slices/productSlice";
import ProductCarousel from "../Components/ProductCarousel";
import Banner from "../Components/Banner";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Banner />
        <hr />
        <ProductCarousel />
        <hr />
        {error && (
          <Alert variant="danger">
            {typeof error === "string"
              ? error
              : error.message || "An error occurred."}
          </Alert>
        )}

        <Row>
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <ProductCard product={product} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
