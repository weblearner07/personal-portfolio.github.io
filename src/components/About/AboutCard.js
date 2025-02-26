import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Prashant Pukale </span>
            from <span className="purple">India.</span>
            <br />
            I have completed B.E in Computer Engineering from Pune.
            <br />
            
            Apart from coding, some other activities that I love to do are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
             <li className="about-activity">
              <ImPointRight /> Reading Book
            </li>
          </ul>

          <p style={{ color: "rgb(155 180 120)" }}>
            "Every expert was once a beginner who dared to start"{" "}
          </p>
          <footer className="blockquote-footer">Prashant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
