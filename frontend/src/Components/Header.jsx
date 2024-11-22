import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaShoppingBag } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const totalQty = useSelector((state) =>
    state.cart.cartItems.reduce((acc, item) => acc + item.qty, 0)
  );

  return (
    <header>
      <Navbar
        className="py-4"
        bg="dark"
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ShoeShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart{" "}
                  {totalQty > 0 && (
                    <Badge pill bg="danger">
                      {totalQty}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign in
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link>
                  <FaShoppingBag /> Shop
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title="More">
                <NavDropdown.Item>
                  <LinkContainer to="">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="">
                    <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
