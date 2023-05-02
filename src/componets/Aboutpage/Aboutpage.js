import React from "react";
import "./Aboutpage.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import htmlImg from "../../Images/Htmlpng.jpg";
import cssIMg from "../../Images/cssImage.png";
import javaScriptIcon from "../../Images/javaScriptIcon.png";
import reactImg from "../../Images/reactImg.png";
import mongoImg from "../../Images/mongoImg.png";
import nodeImg from "../../Images/nodeImg.png";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      {/* -------------------------- */}
      <Container>
        {/* -------------------------- */}
        <Row className="textbackground">
          {/* -------------------------- */}
          <Col md={7}>
            {/* -------------------------- */}
            <h3 className="aboutmetext">
              <FaUser className="about-user" /> <span>About Me</span>
            </h3>
            {/* -------------------------- */}
            <p className="aboutdetails">
              I am a skilled Full Stack Developer with expertise in the MERN
              stack, With hands-on experience in both front-end and back-end
              development. I am well-versed in creating dynamic and responsive
              web applications. I am passionate about developing intuitive user
              experiences and optimizing performance through efficient coding
              practices.Curious to learn more about developing scalable
              distribution systems, love problem solving, and care about writing
              and maintainable code.
            </p>
            {/* -------------------------- */}
          </Col>
          {/* -------------------------- */}
          <Col md={5}>
          <div className="right-side">
        <div className="about-images">
          <img src={htmlImg} alt="html" />
          <img src={cssIMg} alt="css" />
          <img src={javaScriptIcon} alt="javascript" />
          <img src={reactImg} alt="react" />
          <img src={mongoImg} alt="mongodb" />
          <img src={nodeImg} alt="nodejs" />
        </div>
      </div>
          </Col>
          {/* -------------------------- */}
        </Row>
        {/* -------------------------- */}
      </Container>
      {/* -------------------------- */}
    </div>
  );
}

export default Aboutpage;