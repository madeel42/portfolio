import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Muhammad Adeel Akhtar </span>
            from <span className="purple"> Sargodha, Pakistan.</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating custom
            websites with HTML5, CSS3 , JavaScript, TypeScript ReactJs, Svelte , Nextjs,
            Redux-Thunk, Nodejs, Expressjs, mongodb, Firebase, Material-ui,
            Antd(and many other Ui library as well) . I also have experience in
            BlockChain development like Solidity , hardhat, etherjs, web3js.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
