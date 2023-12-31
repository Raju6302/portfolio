import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiCss3,
  DiJava,
  DiHtml5,
  DiReactnative,
  DiBootstrap
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReactnative />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
     
      
    </Row>
  );
}

export default Techstack;
