import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineGlobeAlt } from "react-icons/hi";

function AboutCard() {
  const highlights = [
    { icon: <HiOutlineCode />, text: "8+ Years Experience" },
    { icon: <HiOutlineLightBulb />, text: "50+ Projects Delivered" },
    { icon: <HiOutlineGlobeAlt />, text: "AI & SaaS Specialist" },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p style={{ textAlign: "justify", lineHeight: 1.8 }}>
            Hi! I'm <span className="highlight">Adeel Akhtar</span>, a passionate{" "}
            <span className="highlight">Software Architect</span> based in{" "}
            <span className="highlight">Lahore, Pakistan</span>.
          </p>
          
          <p style={{ textAlign: "justify", lineHeight: 1.8 }}>
            With over <strong>8 years of experience</strong>, I help startups, SaaS companies, and enterprise teams develop 
            modern web applications using <span className="highlight">React.js</span>, <span className="highlight">Next.js</span>, 
            {" "}<span className="highlight">TypeScript</span>, <span className="highlight">Node.js</span>, 
            and modern <span className="highlight">AI technologies</span>. I build secure, high-performance solutions that 
            deliver measurable value—from MVP development to enterprise-grade platforms.
          </p>

          <p style={{ textAlign: "justify", lineHeight: 1.8 }}>
            Currently working at <span className="highlight">Calrom</span>, I'm dedicated 
            to delivering high-performance applications that are optimized for the modern web. 
            I believe in writing clean, maintainable code and creating exceptional user experiences.
          </p>

          <div style={{ 
            display: "flex", 
            gap: "1.5rem", 
            marginTop: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "flex-start"
          }}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--accent-color)",
                  fontSize: "0.95rem",
                  fontWeight: 500
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
