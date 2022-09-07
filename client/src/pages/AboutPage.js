import React from "react";
import Confetti from "react-confetti";
export default function AboutPage() {
  const [confetti, setConfetti] = React.useState(0);
  return (
    <div className="about-page">
      {confetti > 10 && <Confetti />}
      <div
        className="about-card"
        onClick={() => {
          setConfetti(confetti + 1);
        }}
      >
        <div>App built by AB.</div>
        <div>tech stack:</div>
        <ul>
          <li>react</li>
          <li>node js</li>
          <li>express js</li>
          <li>socket io</li>
        </ul>
        Hover for more
      </div>
      <div className="more-about">
        Dizcord is a web chatting application with exceptional features like
        being able to see peoples messages while they are typing! This app is
        using socket io for real time communication between the client and the
        server. It is also using react js for the front end and node js and
        express js for the back end.
      </div>
    </div>
  );
}
