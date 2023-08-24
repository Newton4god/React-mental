import React from 'react'
import './footer.css';
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-title">
            <p>&copy; {new Date().getFullYear()} Online Mental Health</p>
            <br />
            <br />
            <p>21 Airlie Heights blanchardstown</p><br/>
            <p>K78 Y2X4</p>
          </div>

          <ul className="lin">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="#">Privacy & Policy</Link>
            </li>
          </ul>
          <ul className="lin">
            <li>
              <Link to="/about">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">View History</Link>
            </li>
            <li>
              <Link to="/service">Book an appointment</Link>
            </li>
          </ul>
        </div>

        <div className="socials">
          <li>
            <Link to="#">
              <AiFillInstagram />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaTwitter />
            </Link>
          </li>
        </div>
      </footer>
    </div>
  );
}

export default Footer