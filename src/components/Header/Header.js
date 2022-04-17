import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // Handle Log out and navigate user
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
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
            <CustomLink className="text-decoration-none ms-lg-4 n-link" to="/">
              Home
            </CustomLink>
            <CustomLink
              className="text-decoration-none ms-lg-4 n-link"
              to="/blogs"
            >
              Blogs
            </CustomLink>
            <CustomLink
              className="text-decoration-none ms-lg-4 n-link"
              to="/about"
            >
              About Me
            </CustomLink>
            {/* When user available show sign out btn and if not available show login button */}
            {user?.uid ? (
              <span
                style={{ cursor: "pointer" }}
                className="text-white ms-lg-3 n-link"
                onClick={logout}
              >
                Sign Out
              </span>
            ) : (
              <CustomLink
                className="text-decoration-none ms-lg-4 n-link"
                to="/login"
              >
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
