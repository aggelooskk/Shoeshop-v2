import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Button,
  Table,
  Modal,
  Form,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
} from "../Slices/adminSlice";

const AdminScreen = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.admin);
  console.log(products);

  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDeleteProduct = async (id) => {
    try {
      const resultAction = await dispatch(deleteProduct(id));
      if (deleteProduct.fulfilled.match(resultAction)) {
        toast.success("Product deleted successfully!");
      } else {
        toast.error(resultAction.payload || "Failed to delete product");
      }
    } catch {
      toast.error("An error occurred");
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product._id);
    setProductForm({
      id: product._id,
      name: product.name,
      price: product.price,
      category: product.category,
    });
    setShowModal(true);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(
        updateProduct({ id: editingProduct, ...productForm })
      );
      if (updateProduct.fulfilled.match(resultAction)) {
        toast.success("Product updated successfully!");
        setEditingProduct(null);
        setShowModal(false);
        setProductForm({ id: "", name: "", price: "", category: "" });
      } else {
        toast.error(resultAction.payload || "Failed to update product");
      }
    } catch {
      toast.error("An error occurred");
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <h1 className="my-4">Admin Panel</h1>
      {loading && <Spinner animation="border" className="my-3" />}
      {error && <p className="text-danger">{error}</p>}

      <h2>Products</h2>
      <Table striped bordered hover responsive className="my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
           
          <Form onSubmit={handleUpdateProduct}>
            <Form.Group controlId="productName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="name"
                value={productForm.name}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group controlId="productPrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                name="price"
                value={productForm.price}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group controlId="productCategory" className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product category"
                name="category"
                value={productForm.category}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Row>
              <Col>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
              </Col>
              <Col className="text-end">
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminScreen;
