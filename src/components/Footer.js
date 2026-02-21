import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const socialLinks = [
    { href: "https://github.com/madeel42", icon: <AiFillGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/whoadeelakhtar/", icon: <FaLinkedinIn />, label: "LinkedIn" },
    { href: "https://twitter.com/MAdeel71165131", icon: <BsTwitter />, label: "Twitter" },
    { href: "mailto:madeelakhtar204@gmail.com", icon: <MdEmail />, label: "Email" },
  ];

  return (
    <Container fluid className="footer">
      <Row className="justify-content-center">
        <Col md={12} className="text-center">
          <ul className="footer-icons">
            {socialLinks.map((link, index) => (
              <li key={index} className="social-icons">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-social-icons"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer-copywright">
            <p style={{ margin: 0 }}>
              Designed & Built by <span style={{ color: "var(--primary-light)" }}>Adeel Akhtar</span>
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem" }}>
              © {year} All Rights Reserved
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
