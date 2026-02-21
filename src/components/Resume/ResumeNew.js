import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineCode, HiOutlineSparkles } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const experiences = [
  {
    title: "Software Engineer",
    company: "Calrom",
    duration: "Apr 2023 - Present",
    description: "Leading frontend architecture, building scalable React applications, and implementing best practices for code quality and performance."
  },
  {
    title: "Software Engineer",
    company: "CyberMart",
    duration: "Oct 2022 - Mar 2023",
    description: "Developed e-commerce solutions and retail applications using React, Redux, and Node.js."
  },
  {
    title: "Software Engineer",
    company: "SL2 Studio",
    duration: "May 2022 - Sep 2022",
    description: "Built blockchain and Web3 projects using Solidity, Ether.js, and Web3.js."
  },
  {
    title: "Software Developer",
    company: "GamicaCloud",
    duration: "Nov 2019 - Apr 2022",
    description: "Created web applications using React, Redux, Node.js, MongoDB, and Firebase."
  }
];

const skills = [
  "React.js", "TypeScript", "JavaScript", "Node.js", "Python", 
  "Next.js", "Redux", "Svelte", "MongoDB", "GraphQL",
  "Web3.js", "Ether.js", "Solidity", "Hardhat", "AWS"
];

function ResumeNew() {
  const cvPath = process.env.PUBLIC_URL + "/Muhammad_Adeel_Akhtar_Resume.docx";

  return (
    <div>
      <Container fluid className="resume-section">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>
              My <span className="purple">Resume</span>
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
              6+ years of experience building innovative web applications and blockchain solutions
            </p>
            <Button 
              variant="primary" 
              href={cvPath}
              download="Adeel_Akhtar_Resume.docx"
              className="download-button"
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </motion.div>

          <Row className="justify-content-center" style={{ marginBottom: "4rem" }}>
            <Col lg={10}>
              <motion.div 
                variants={fadeInUp}
                className="pdf-container"
                style={{ padding: "3rem" }}
              >
                <Row>
                  <Col lg={8}>
                    <div style={{ marginBottom: "3rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                        <HiOutlineBriefcase style={{ fontSize: "1.75rem", color: "var(--primary)" }} />
                        <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>Work Experience</h2>
                      </div>
                      
                      {experiences.map((exp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          style={{
                            borderLeft: "3px solid var(--primary)",
                            paddingLeft: "1.5rem",
                            marginBottom: "1.5rem",
                            position: "relative"
                          }}
                        >
                          <div style={{
                            position: "absolute",
                            left: "-8px",
                            top: "0",
                            width: "12px",
                            height: "12px",
                            background: "var(--gradient-1)",
                            borderRadius: "50%"
                          }} />
                          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "0.25rem" }}>
                            {exp.title}
                          </h3>
                          <p style={{ color: "var(--primary-light)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            {exp.company}
                          </p>
                          <p style={{ color: "var(--secondary)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                            {exp.duration}
                          </p>
                          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>
                            {exp.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                        <HiOutlineAcademicCap style={{ fontSize: "1.75rem", color: "var(--primary)" }} />
                        <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>Education</h2>
                      </div>
                      
                      <div style={{
                        borderLeft: "3px solid var(--primary)",
                        paddingLeft: "1.5rem",
                        position: "relative"
                      }}>
                        <div style={{
                          position: "absolute",
                          left: "-8px",
                          top: "0",
                          width: "12px",
                          height: "12px",
                          background: "var(--gradient-1)",
                          borderRadius: "50%"
                        }} />
                        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "0.25rem" }}>
                          BS Information Technology
                        </h3>
                        <p style={{ color: "var(--primary-light)", fontWeight: 500, marginBottom: "0.25rem" }}>
                          Government College University, Faisalabad
                        </p>
                        <p style={{ color: "var(--secondary)", fontSize: "0.9rem", margin: 0 }}>
                          2017 - 2021
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div style={{ 
                      background: "rgba(139, 92, 246, 0.05)", 
                      borderRadius: "16px", 
                      padding: "1.5rem",
                      border: "1px solid var(--border-color)"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                        <HiOutlineCode style={{ fontSize: "1.5rem", color: "var(--primary)" }} />
                        <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>Skills</h3>
                      </div>
                      
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {skills.map((skill, index) => (
                          <span
                            key={index}
                            style={{
                              background: "rgba(139, 92, 246, 0.15)",
                              color: "var(--primary-light)",
                              padding: "0.4rem 0.85rem",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              fontWeight: 500,
                              border: "1px solid rgba(139, 92, 246, 0.3)"
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ 
                      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))", 
                      borderRadius: "16px", 
                      padding: "1.5rem",
                      marginTop: "1.5rem",
                      border: "1px solid var(--border-color)",
                      textAlign: "center"
                    }}>
                      <HiOutlineSparkles style={{ fontSize: "2rem", color: "var(--secondary)", marginBottom: "0.75rem" }} />
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Open to Opportunities</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                        Looking for exciting roles in software architecture and full-stack development
                      </p>
                      <a 
                        href="mailto:madeelakhtar204@gmail.com"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "var(--secondary-light)",
                          textDecoration: "none",
                          fontWeight: 500,
                          fontSize: "0.95rem"
                        }}
                      >
                        Get in Touch <BsArrowRight />
                      </a>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default ResumeNew;
