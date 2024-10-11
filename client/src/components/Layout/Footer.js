import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer text-center">
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        All Rights Reserved &copy; Garden Gems
        <div style={{ fontSize: "1rem", fontStyle: "italic" }}>
          by Tyohar
        </div>
      </h1>
      <p className="mt-3">
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
