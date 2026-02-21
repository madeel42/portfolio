import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Architect",
          "Full Stack Developer",
          "React.js Expert",
          "Web3 & Blockchain Dev",
          "AI Enthusiast",
          "TypeScript Pro",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
        delay: 70,
      }}
    />
  );
}

export default TypeWriter;
