import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

function ProjectCards(props) {
  const technologies = props.technologyUsed.split(",").map(tech => tech.trim());

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="project-card-view">
        <div style={{ overflow: "hidden", borderRadius: "16px 16px 0 0" }}>
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt={props.title}
            style={{
              transition: "transform 0.4s ease",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {props.description && (
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
          )}

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
            <a 
              href={props.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-custom"
              style={{ 
                padding: "0.625rem 1.25rem",
                fontSize: "0.9rem",
                flex: 1,
                justifyContent: "center"
              }}
            >
              <BiLinkExternal />
              {props.isBlog ? "Read Blog" : "Live Demo"}
            </a>
            {props.githubLink && (
              <a 
                href={props.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary-custom"
                style={{ 
                  padding: "0.625rem 1rem",
                  fontSize: "0.9rem"
                }}
              >
                <FiGithub />
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
