import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Full-Stack Engineer",
          "AI Integration Specialist",
          "React & Next.js Expert",
          "SaaS Platform Developer",
          "Node.js Architect",
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
