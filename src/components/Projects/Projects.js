import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png"
import calculator from "../../Assets/Projects/calculator.png"
import rock from "../../Assets/Projects/R-P-S.png"
import todo from "../../Assets/Projects/todo-list.png"
import shippingCharges from "../../Assets/projects/shipping-charges.png"


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
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Developed a responsive portfolio site using React.js, showcasing skills and projects. Ensured optimal user experience across devices.Demonstrated proficiency in React.js for creating interactive, data-driven web applications."
              ghLink="https://github.com/Raju6302/portfolio"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shippingCharges}
              isBlog={false}
              title="Shipping-Charges"
              description="Developed a full-stack project utilizing React for frontend, Spring Boot for backend, and MySQL for database management. Implemented a form allowing users to input name, mobile number, email, origin city, destination city, and weight, with city values dynamically fetched from the database. Enhanced user experience by displaying calculated total based on destination city value and user-provided weight upon form submission, while ensuring seamless data storage in the database."
              ghLink="https://github.com/Raju6302/shipping-charges"
                         
            />
          </Col>


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

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
