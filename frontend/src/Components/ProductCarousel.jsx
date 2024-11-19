import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Image } from "react-bootstrap";
import { fetchProducts } from "../Slices/productSlice";
import { Spinner } from "react-bootstrap";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, status, error } = useSelector((state) => state.product);

  if (status === "loading")
    return (
      <p>
        <Spinner />
      </p>
    );
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <>
      <Carousel slide={true} className="sm-primary sm-4">
        {products.map((product, index) => (
          <Carousel.Item key={index}>
            <Image src={product.image} alt={product.name} />
            <Carousel.Caption>
              <h3>{product.description}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
