import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineGlobeAlt } from "react-icons/hi";

function AboutCard() {
  const highlights = [
    { icon: <HiOutlineCode />, text: "6+ Years Experience" },
    { icon: <HiOutlineLightBulb />, text: "50+ Projects Delivered" },
    { icon: <HiOutlineGlobeAlt />, text: "Web3 & Blockchain Expert" },
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
            With over <strong>6 years of experience</strong>, I specialize in building 
            scalable web applications and blockchain-based solutions. My expertise spans 
            across <span className="highlight">React.js</span>, <span className="highlight">Node.js</span>, 
            {" "}<span className="highlight">TypeScript</span>, <span className="highlight">Python</span>, 
            and cutting-edge <span className="highlight">Web3 technologies</span> including 
            Solidity, Ether.js, and Web3.js.
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
