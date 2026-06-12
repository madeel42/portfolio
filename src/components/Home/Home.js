import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import myImg from "../../Assets/adii.jpeg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import Services from "./Services";
import Industries from "./Industries";
import { NavLink } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowRight, BsRobot } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className="home-header order-lg-1 order-2">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeInUp} className="ai-badge">
                  <HiOutlineSparkles />
                  <span>AI & Full-Stack Specialist</span>
                  <BsRobot />
                </motion.div>

                <motion.p variants={fadeInUp} className="greeting">
                  Hello World!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋
                  </span>
                </motion.p>

                <motion.h1 variants={fadeInUp} className="heading-name" style={{ fontSize: "2.5em", color: "white" }}>
                  Building AI-Powered <span className="main-name">SaaS Products</span> & Modern Web Applications
                </motion.h1>

                <motion.p variants={fadeInUp} className="heading-description">
                  I help startups and businesses build scalable web platforms, AI integrations, 
                  intelligent automation systems, and enterprise-grade applications using 
                  <strong> React, Next.js, Node.js, TypeScript,</strong> and modern <strong>AI technologies</strong>.
                </motion.p>

                <motion.div variants={fadeInUp} className="role-title">
                  <TypeWriter />
                </motion.div>

                <motion.div variants={fadeInUp} className="stats-container">
                  <div className="stat-item">
                    <span className="stat-number">8+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Built</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="cta-buttons">
                  <NavLink to="/project" className="btn-primary-custom">
                    Explore My Work
                    <BsArrowRight />
                  </NavLink>
                  <NavLink to="/resume" className="btn-secondary-custom">
                    <AiOutlineDownload />
                    Get Resume
                  </NavLink>
                </motion.div>
              </motion.div>
            </Col>

            <Col lg={5} md={12} className="order-lg-2 order-1 mb-4 mb-lg-0">
              <motion.div 
                className="profile-pic-wrapper"
                variants={scaleIn}
                initial="hidden"
                animate="visible"
              >
                <img src={myImg} className="profile-pic" alt="Adeel Akhtar" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Services />
      <Industries />

      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h1>Let's Build Something Intelligent</h1>
                <p>
                  Looking to build an AI-powered application, SaaS platform, or modern web product? Let's discuss your project.
                </p>
                <SocialMedia />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
