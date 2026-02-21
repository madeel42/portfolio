import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.jpg";
import { SKILLS, TOOLS, EXPERIENCE } from "../../Constants";
import { 
  FaCode, FaGitAlt, FaDocker, FaNpm, FaFigma, FaAws
} from "react-icons/fa";
import { 
  SiPostman, SiFirebase, SiJira
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const iconMap = {
  vscode: <VscVscode />,
  git: <FaGitAlt />,
  docker: <FaDocker />,
  jira: <SiJira />,
  postman: <SiPostman />,
  chrome: <FaCode />,
  npm: <FaNpm />,
  firebase: <SiFirebase />,
  aws: <FaAws />,
  figma: <FaFigma />,
};

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
    transition: { staggerChildren: 0.1 }
  }
};

function About() {
  const frontendSkills = SKILLS.filter(s => s.category === "frontend");
  const backendSkills = SKILLS.filter(s => s.category === "backend");
  const blockchainSkills = SKILLS.filter(s => s.category === "blockchain");

  return (
    <Container fluid className="about-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col lg={7} md={12} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
              <motion.div variants={fadeInUp}>
                <h1 className="section-title">
                  About <span className="gradient-text">Me</span>
                </h1>
                <p className="section-subtitle">Get to know me better</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Aboutcard />
              </motion.div>
            </Col>
            <Col lg={5} md={12} style={{ paddingBottom: "50px" }} className="about-img">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={developer} alt="Developer" className="image-style" />
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="experience-section"
        >
          <motion.h2 variants={fadeInUp} className="section-title" style={{ marginBottom: "2rem" }}>
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <Row>
            {EXPERIENCE.map((exp, index) => (
              <Col lg={6} md={12} key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="experience-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-location">{exp.location}</p>
                  <p className="experience-description">{exp.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="skills-section"
        >
          <motion.h2 variants={fadeInUp} className="section-title" style={{ marginBottom: "2rem" }}>
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          <Row>
            <Col lg={4} md={6}>
              <motion.div variants={fadeInUp} className="skill-category">
                <h3 className="skill-category-title">Frontend Development</h3>
                {frontendSkills.map((skill, index) => (
                  <Techstack
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </motion.div>
            </Col>
            
            <Col lg={4} md={6}>
              <motion.div variants={fadeInUp} className="skill-category">
                <h3 className="skill-category-title">Backend Development</h3>
                {backendSkills.map((skill, index) => (
                  <Techstack
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </motion.div>
            </Col>

            <Col lg={4} md={6}>
              <motion.div variants={fadeInUp} className="skill-category">
                <h3 className="skill-category-title">Blockchain & Web3</h3>
                {blockchainSkills.map((skill, index) => (
                  <Techstack
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ marginTop: "4rem" }}
        >
          <motion.h2 variants={fadeInUp} className="section-title" style={{ marginBottom: "2rem" }}>
            Tools & <span className="gradient-text">Technologies</span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="tools-grid">
            {TOOLS.map((tool, index) => (
              <motion.div
                key={index}
                className="tool-item"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ 
                  fontSize: "2.25rem", 
                  marginBottom: "0.75rem",
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  {iconMap[tool.icon]}
                </div>
                <span>{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Container>
  );
}

export default About;
