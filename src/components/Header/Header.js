import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
    .then(() => {
        navigate('/login')
    })
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="py-4 header" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo text-white">
          GET ME HEALTHY
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-white"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto link-container">
            <CustomLink className="text-decoration-none ms-lg-4" to="/">
              Home
            </CustomLink>
            <CustomLink className="text-decoration-none ms-lg-4" to="/about">
              About Me
            </CustomLink>
            {user?.uid ? (
              <span
                style={{ cursor: "pointer" }}
                className="text-white ms-3"
                onClick={logout}
              >
                Sign Out
              </span>
            ) : (
              <CustomLink className="text-decoration-none ms-lg-4" to="/login">
                Login
              </CustomLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
