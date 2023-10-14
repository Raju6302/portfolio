import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="purple">Vijay Kumar Jaripity </span>
            hailing from <span className="purple"> kadiri, India.</span>
            <br /> I've recently earned my B.Tech degree in Robotics Engineering from Vivekananda Global University in Jaipur. 🎓
            <br />
            I'm currently on the lookout for a full-time employment opportunity.
            <br />
            <br />
            Beyond my passion for coding, I also have a diverse range of interests that I thoroughly enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Engaging in gaming adventures 🎮
            </li>
            <li className="about-activity">
              <ImPointRight />  Exploring new destinations through travel ✈️
            </li>
            <li className="about-activity">
              <ImPointRight /> Expressing myself through the art of singing 🎤
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vijay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
