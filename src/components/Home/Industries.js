import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsCheck2Circle, BsPinAngle } from "react-icons/bs";

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

function Industries() {
  const industries = [
    "Travel & Booking Platforms",
    "FinTech Applications",
    "Healthcare Solutions",
    "E-commerce Platforms",
    "SaaS Products",
    "CRM & Business Management",
    "AI-Powered Applications",
    "Analytics & Dashboards"
  ];

  const projects = [
    "Travel Booking Platforms",
    "FinTech Dashboards & Portals",
    "Healthcare Management Systems",
    "E-commerce Platforms",
    "SaaS Applications",
    "AI-Powered Products",
    "CRM Systems",
    "Analytics Dashboards",
    "Startup MVP Development",
    "Enterprise Web Applications"
  ];

  return (
    <Container fluid className="services-section" style={{ padding: "50px 0", backgroundColor: "var(--bg-dark)" }}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Row>
            <Col md={6}>
              <motion.h2 variants={fadeInUp} className="section-title text-center" style={{ marginBottom: "2rem", fontSize: "2rem", color: "white" }}>
                Industries I <span className="gradient-text">Work With</span>
              </motion.h2>
              <Row>
                {industries.map((ind, index) => (
                  <Col sm={6} key={index} style={{ marginBottom: "1rem" }}>
                    <motion.div
                      variants={fadeInUp}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        background: "rgba(24, 24, 27, 0.4)",
                        padding: "1rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(139, 92, 246, 0.15)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      }}
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: "rgba(139, 92, 246, 0.15)",
                        borderColor: "rgba(139, 92, 246, 0.5)",
                        boxShadow: "0 8px 32px rgba(139, 92, 246, 0.15)"
                      }}
                    >
                      <BsCheck2Circle style={{ color: "var(--secondary)", fontSize: "1.2rem", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.95rem", color: "white" }}>{ind}</span>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col md={6} style={{ marginTop: window.innerWidth < 768 ? "3rem" : "0" }}>
              <motion.h2 variants={fadeInUp} className="section-title text-center" style={{ marginBottom: "2rem", fontSize: "2rem", color: "white" }}>
                Projects I Can <span className="gradient-text">Help With</span>
              </motion.h2>
              <Row>
                {projects.map((proj, index) => (
                  <Col sm={6} key={index} style={{ marginBottom: "1rem" }}>
                    <motion.div
                      variants={fadeInUp}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        background: "rgba(24, 24, 27, 0.4)",
                        padding: "1rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(6, 182, 212, 0.15)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      }}
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: "rgba(6, 182, 212, 0.15)",
                        borderColor: "rgba(6, 182, 212, 0.5)",
                        boxShadow: "0 8px 32px rgba(6, 182, 212, 0.15)"
                      }}
                    >
                      <BsPinAngle style={{ color: "var(--primary)", fontSize: "1.2rem", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.95rem", color: "white" }}>{proj}</span>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Industries;
