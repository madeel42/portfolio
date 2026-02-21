import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const socialLinks = [
  { 
    href: "https://github.com/madeel42", 
    icon: <AiFillGithub />, 
    label: "GitHub",
    color: "#333"
  },
  { 
    href: "https://www.linkedin.com/in/whoadeelakhtar/", 
    icon: <FaLinkedinIn />, 
    label: "LinkedIn",
    color: "#0077b5"
  },
  { 
    href: "https://twitter.com/MAdeel71165131", 
    icon: <BsTwitter />, 
    label: "Twitter",
    color: "#1da1f2"
  },
  { 
    href: "mailto:madeelakhtar204@gmail.com", 
    icon: <MdEmail />, 
    label: "Email",
    color: "#ea4335"
  },
];

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      {socialLinks.map((link, index) => (
        <motion.li 
          key={index} 
          className="social-icons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-icons"
            aria-label={link.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}

export default SocialMedia;
