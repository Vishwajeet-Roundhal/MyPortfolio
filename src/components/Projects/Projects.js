import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

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
              title="Food delivery website"
              description="A full-stack food delivery platform built using the MERN stack. It features secure user authentication, real-time order tracking with Socket.io, restaurant and menu management, and group ordering functionality."
              ghLink="https://github.com/Vishwajeet-Roundhal/food-delivery-mern"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Ecommerce website"
              description="An online shopping platform developed with the MERN stack, utilizing Redux and Context API for state management. It includes user authentication, product filtering, a cart system, and a secure checkout process."
              ghLink="https://github.com/Vishwajeet-Roundhal/react-ecom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="URL shortener"
              description="A simple URL shortening service built using Java Spring Boot and H2 Database,featuring user authentication for managing and tracking shortened links. It allows users to generate short links and redirect them efficiently."
              ghLink="https://github.com/Vishwajeet-Roundhal/UrlShortener"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
