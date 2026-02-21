import React from "react";
import { motion } from "framer-motion";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ position: "relative" }}>
          <motion.div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "3px solid rgba(139, 92, 246, 0.1)",
              borderTop: "3px solid #8b5cf6",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "3px solid rgba(6, 182, 212, 0.1)",
              borderBottom: "3px solid #06b6d4",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <motion.span
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading
        </motion.span>
      </motion.div>
    </div>
  );
}

export default Preloader;
