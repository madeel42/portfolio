import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsRobot, BsCodeSlash, BsLayoutTextWindowReverse, BsServer } from "react-icons/bs";

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

function Services() {
  const servicesData = [
    {
      title: "Frontend Engineering",
      icon: <BsLayoutTextWindowReverse />,
      skills: ["React.js Applications", "Next.js Websites & Platforms", "TypeScript Development", "Responsive & Mobile-First UI", "Figma to React / Next.js", "Tailwind CSS Development", "Performance Optimization"]
    },
    {
      title: "Full-Stack Development",
      icon: <BsCodeSlash />,
      skills: ["MERN Stack Applications", "Node.js & Express.js", ".NET Core Entity Framework", "REST API & GraphQL", "Authentication & Authorization", "Real-Time Applications", "Database Design & Integration", "Admin Panels & Dashboards"]
    },
    {
      title: "AI & Automation Solutions",
      icon: <BsRobot />,
      skills: ["OpenAI API Integration", "AI Chatbots & Assistants", "LLM-Powered Applications", "AI Workflow Automation", "RAG-Based Solutions", "Custom AI Features"]
    },
    {
      title: "Integrations & Deployment",
      icon: <BsServer />,
      skills: ["Stripe Payment Integration", "Firebase Services", "Third-Party APIs", "Docker Setup", "CI/CD Pipelines", "Vercel & Cloud Deployments"]
    }
  ];

  return (
    <Container fluid className="services-section" id="services" style={{ padding: "50px 0", backgroundColor: "var(--bg-dark)" }}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="section-title text-center" style={{ marginBottom: "3rem", color: "white" }}>
            My <span className="gradient-text">Services</span>
          </motion.h1>

          <Row>
            {servicesData.map((service, index) => (
              <Col lg={3} md={6} sm={12} key={index} style={{ marginBottom: "2rem" }}>
                <motion.div
                  variants={fadeInUp}
                  className="service-card p-4"
                  style={{
                    background: "rgba(24, 24, 27, 0.4)",
                    borderRadius: "16px",
                    height: "100%",
                    border: "1px solid rgba(139, 92, 246, 0.15)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: "rgba(139, 92, 246, 0.5)",
                    boxShadow: "0 10px 40px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ fontSize: "3rem", color: "#8b5cf6", marginBottom: "1rem" }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#fff" }}>{service.title}</h3>
                  <ul style={{ listStyleType: "none", padding: 0, color: "white" }}>
                    {service.skills.map((skill, sIndex) => (
                      <li key={sIndex} style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>
                        - {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Services;
