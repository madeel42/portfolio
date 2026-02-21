import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";
import { FiGithub } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="project-heading">
            My Recent <span className="purple">Projects</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            style={{ color: "var(--text-secondary)", marginBottom: "3rem" }}
          >
            Here are some of the projects I've worked on recently. Each project 
            showcases different skills and technologies.
          </motion.p>

          <Row style={{ justifyContent: "center" }}>
            {PROJECTS.map((project, index) => (
              <Col lg={4} md={6} key={index} className="project-card">
                <motion.div
                  variants={fadeInUp}
                  custom={index}
                >
                  <ProjectCard
                    imgPath={project.image}
                    technologyUsed={project.technologyUsed}
                    isBlog={false}
                    title={project.name}
                    description={project.description}
                    link={project.url}
                    githubLink={project.github}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div 
            variants={fadeInUp}
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            <a 
              href="https://github.com/madeel42?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <FiGithub />
              View More on GitHub
              <BsArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
