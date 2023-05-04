import React from "react";
import "./Homepage.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "./Text";
import { AiFillFileExclamation, AiFillGithub } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
function Home() {
  return (
    <div className="homepagebackground">
      {/* ----------------------------- */}
      <Container>
        {/* ----------------------------- */}
        <Row>
          {/* ----------------------------- */}
          <Col md={7}>
            {/* ----------------------------- */}
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            {/* ----------------------------- */}
            <h2 className="nametext">I'm PRADEEP V</h2>
            {/* ----------------------------- */}
            <span></span>
            <Text />
            {/* ----------------------------- */}
            <button
              onClick={() => {
                window.open(`${"https://github.com/PradeepV0"}`);
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon-github" />
            </button>
            {/* ----------------------------- */}
            <button
              onClick={() => {
                window.open(`${"https://www.linkedin.com/in/pradeep-venkateshwaran-a0a559147"}`);;
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon-linkedin" />
            </button>
            <Button
            onClick={() => {
              window.open(`${"https://docs.google.com/document/d/1145bCsgYb9nzweglBwLmPd7dG23-p3YK/edit?usp=share_link&ouid=109591783048695661057&rtpof=true&sd=true"}`);
            }}
            className="resumebtn"
          >
            {/* <span className="resume-title">Resume</span>{" "} */}
            {/* <a href="https://docs.google.com/document/d/1145bCsgYb9nzweglBwLmPd7dG23-p3YK/edit?usp=share_link&ouid=109591783048695661057&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer" 
          > */}
            <span className="resume-title"> Resume</span>
            <AiFillFileExclamation  />
          
            
          </Button>
            {/* ----------------------------- */}
          
          </Col>
          {/* ----------------------------- */}
          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
          {/* ----------------------------- */}
        </Row>
        {/* ----------------------------- */}
      </Container>
      {/* ----------------------------- */}
    </div>
  );
}

export default Home;