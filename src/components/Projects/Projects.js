import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/textutil.jpg";
import portfolio from "../../Assets/Projects/portfolio.png";
import editor from "../../Assets/Projects/numguess.jpg";
import chatify from "../../Assets/Projects/ats.jpg";
import bitsOfCode from "../../Assets/Projects/walletsite.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="Attendance Tracking System"
              description="An attendance tracking system for staff/admin build with Python,Google Cloud ,Gmail API. Have features which allows user to track,update students attendance , send mail to students with low attendance &nbsp;&nbsp;&nbsp;"
              ghLink="https://github.com/weblearner07/Attendance_Tracking_System"
              demoLink="https://github.com/weblearner07/Attendance_Tracking_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Wallet Site UI"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/weblearner07/walletsite.github.io"
              demoLink="https://weblearner07.github.io/walletsite.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Number Guessing game"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/weblearner07/numguessgame.github.io"
              demoLink="https://weblearner07.github.io/numguessgame.github.io/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Text Converter"
              description="This Website is built using React Js during learning React Js from Code With Harry,This Project provides with conversion of text to lowercase, uppercase and much more."
              ghLink="https://github.com/weblearner07/TextUtils"
              demoLink="https://weblearner07.github.io/TextUtils/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="Personal Portfolio website build with React Js. It displays my information, projects completed, contact details and shows my development skills. "
              ghLink="https://github.com/weblearner07/personal-portfolio.github.io"
              demoLink="https://github.com/weblearner07/personal-portfolio.github.io"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
