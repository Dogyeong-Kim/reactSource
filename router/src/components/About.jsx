import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        {["HTML", "CSS", "JAVASCIPT"].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
