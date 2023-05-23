import React from 'react';
import { Navbar, Button, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';

const Navigation = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Ecomern</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}

            {user && !user.isAdmin && (
              <LinkContainer to="/cart">
                  <Nav.Link>
                      <i className="fas fa-shopping-cart"></i>
                      {user?.cart.count > 0 && (
                          <span className="badge badge-warning" id="cartcount">
                              {user.cart.count}
                          </span>
                      )}
                  </Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                {user.isAdmin && (
                  <div>
                    <LinkContainer to="/admin">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/new-product">
                      <NavDropdown.Item>Create Product</NavDropdown.Item>
                    </LinkContainer>
                  </div>
                )}
                {!user.isAdmin && (
                  <div>
                    <LinkContainer to="/cart">
                      <NavDropdown.Item>Cart</NavDropdown.Item>
                    </LinkContainer>
                  </div>
                )}
                <NavDropdown.Divider />
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </Button>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
