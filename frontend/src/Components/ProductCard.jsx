import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Nav } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { addToCart } from "../Slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="my-2 p-2 rounded shadow-lg">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Nav.Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Nav.Link>
        <Card.Text as="div">{product.description}</Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
        <Row className="mt-3">
          <Col>
            <Button variant="dark" onClick={addToCartHandler}>
              Add to Cart
            </Button>
          </Col>
          <Col className="text-end">
            <Button variant="dark">
              <FaHeart />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
