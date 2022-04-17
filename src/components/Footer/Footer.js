import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
      <footer id="footer" className="footer pt-5 mt-5">
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h2 className="mb-3">Website</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to={'/about'}>About</Link>
                  </li>
                  <li>
                    <a href="#services">Service</a>
                  </li>
                  <li>
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h2 className="mb-3">Services</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#services">Personal training start up</a>
                  </li>
                  <li>
                    <a href="#services">Personal Training Grow up</a>
                  </li>
                  <li>
                    <a href="#services">Personal training & Fitness Studio</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 col-sm-6">
              <div className="footer__widget">
                <h2 className="mb-3">Useful Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 col-sm-6">
              <div className="footer__about">
                <div className="footer__logo mb-3">
                  <h4>GET ME HEALTHY</h4>
                </div>
                <p className="address-title">
                  Address : Rajbari sadar, Dhaka, Bangladesh.
                </p>
                <ul className="list-unstyled address-footer">
                  <li>Phone : 01628890779</li>
                  <li>Email : azalamins@gmail.com</li>
                  <li>Web-mail : info@azalamin.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright__text text-center py-3">
          <p className="text-center text-white">
            Copyright &copy; Reserved By Get Me Healthy
          </p>
        </div>
      </footer>
    );
};

export default Footer;