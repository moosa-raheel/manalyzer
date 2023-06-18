import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav>
      <h1 className="logo">MAnalyzer</h1>
      <ul>
        <li>
          <Link to="/">{props.one}</Link>
        </li>
        <li>
          <Link to="/about">{props.two}</Link>
        </li>
        <li>
          <Link to="/contact">{props.three}</Link>
        </li>
      </ul>
      <div className="dark-btn">
        <input type="checkbox" name="checkbox" id="toggle" />
        <label htmlFor="toggle" className="switch" title="Dark Mode"></label>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  one: PropTypes.string,
  two: PropTypes.string,
  three: PropTypes.string,
};
Navbar.defaultProps = {
  one: "Home",
  two: "About",
  three: "Contact",
};
