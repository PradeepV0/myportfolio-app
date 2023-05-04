import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiFillContacts,

  AiOutlineHome,
  AiOutlineLaptop,
} from "react-icons/ai";
import { FaPenFancy, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
  // -------------------------------
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  // -------------------------------
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  // -------------------------------
  window.addEventListener("scroll", scrollHandler);
  // -------------------------------
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      {/* ----------------------------- */}
      <Navbar.Brand className="logotext" as={Link} to="/">
        {/* ----------------------------- */}
        
        {/* ----------------------------- */}
        <div className="logo">
          <span className="logo-span">Portfolio</span>
        </div>
        {/* ----------------------------- */}
      </Navbar.Brand>
      {/* ----------------------------- */}
      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      {/* ----------------------------- */}
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
        {/* ----------------------------- */}
        <Nav className="ms-auto" defaultActiveKey="#home">
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              {" "}
              <AiOutlineHome className="navbar-icons" /> Home
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <FaUserTie className="navbar-icons" /> About
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/skills"
              onClick={() => updateExpanded(false)}
            >
              <FaPenFancy className="navbar-icons" /> Skills
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineLaptop className="navbar-icons" /> Projects
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              <AiFillContacts className="navbar-icons" /> Contact
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}

          {/* ----------------------------- */}
        </Nav>
        {/* ----------------------------- */}
      </Navbar.Collapse>
      {/* ----------------------------- */}
    </Navbar>
  );
}

export default Header;