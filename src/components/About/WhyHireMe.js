import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsCheckCircleFill, BsStarFill } from "react-icons/bs";

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

function WhyHireMe() {
  const reasons = [
    "Clean, scalable, and maintainable code",
    "Strong focus on performance and user experience",
    "Business-oriented problem solving",
    "Clear communication and regular progress updates",
    "Experience building production-ready applications",
    "Fast onboarding and reliable delivery",
    "Long-term support and collaboration"
  ];

  const expertise = [
    "React.js Development",
    "Next.js Development",
    "Node.js Development",
    "Full-Stack Web Development",
    "AI Application Development",
    "TypeScript Development",
    "API Integration & Development",
    "Performance Optimization",
    "Dashboard & Admin Panel Development",
    "SaaS Product Development"
  ];

  return (
    <Container fluid style={{ padding: "50px 0", backgroundColor: "var(--bg-dark)" }}>
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
                Why Clients <span className="gradient-text">Hire Me</span>
              </motion.h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {reasons.map((reason, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    style={{
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
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
                    <BsCheckCircleFill style={{ color: "var(--secondary)", marginTop: "4px", fontSize: "1.2rem", flexShrink: 0 }} />
                    <span style={{ fontSize: "1rem", color: "white" }}>{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </Col>

            <Col md={6} style={{ marginTop: window.innerWidth < 768 ? "3rem" : "0" }}>
              <motion.h2 variants={fadeInUp} className="section-title text-center" style={{ marginBottom: "2rem", fontSize: "2rem", color: "white" }}>
                Core <span className="gradient-text">Expertise</span>
              </motion.h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {expertise.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    style={{
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      background: "rgba(24, 24, 27, 0.4)",
                      padding: "1rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(236, 72, 153, 0.15)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(236, 72, 153, 0.15)",
                      borderColor: "rgba(236, 72, 153, 0.5)",
                      boxShadow: "0 8px 32px rgba(236, 72, 153, 0.15)"
                    }}
                  >
                    <BsStarFill style={{ color: "var(--primary)", fontSize: "1.2rem", flexShrink: 0 }} />
                    <span style={{ fontSize: "1rem", color: "white" }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default WhyHireMe;
