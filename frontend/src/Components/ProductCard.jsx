import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { addToCart } from "../Slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="my-2 p-2 ounded shadow-lg">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          className="w-100 h-75 object-fit-cover"
          src={product.image}
          variant="top"
        />
      </Link>
      <Card.Body>
        <Card.Title className="fw-bold">{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
        <Row className="mt-3">
          <Col>
            <Button variant="dark" onClick={addToCartHandler}>
              Add to Cart
            </Button>
          </Col>
          <Col>
            <Button variant="outline-danger">
              <FaHeart />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
