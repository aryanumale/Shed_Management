import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CustomNavbar = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const navigator = useNavigate();

  const handleLogoutClick = () => {
    handleLogout(); // Call logout function passed from parent component
    navigator("/login"); // Redirect to the login page after logout
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Your App Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Add more NavLinks or NavItems as needed */}
        </Nav>
        {isLoggedIn ? (
          <Nav>
            <Navbar.Text className="text-light mr-2">
              Signed in as: {location.state.user.firstname} {location.state.user.lastname}
            </Navbar.Text>
            <Button variant="outline-light" onClick={handleLogoutClick}>Logout</Button>
          </Nav>
        ) : (
          <Nav>
            <Button variant="outline-light" onClick={() => navigator("/login")}>Login</Button>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;