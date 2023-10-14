import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import calculator from "../../Assets/Projects/calculator.png"
import rock from "../../Assets/Projects/R-P-S.png"
import todo from "../../Assets/Projects/todo-list.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo-list"
              description="This is a user-friendly and efficient Todo-List application built using React.js. With this feature-rich todo-list, you can effortlessly add new tasks to your list and easily remove them when they are completed. Enjoy a seamless task management experience with real-time updates and a clean user interface"
              ghLink="https://github.com/Raju6302/Todo-list-react"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="calculator"
              description="Our web-based calculator offers essential arithmetic functions.With a simple yet intuitive design, it provides users with a straightforward and efficient tool for performing basic calculations."
              ghLink="https://github.com/Raju6302/calculator"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rock}
              isBlog={false}
              title="Rock-Paper-Scissor"
              description="Our Rock, Paper, Scissors game is a classic and interactive web-based challenge. Test your decision-making skills as you face off against the computer in this timeless game of strategy and luck."
              ghLink="https://github.com/Raju6302/Rock-Paper-Scissor"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
