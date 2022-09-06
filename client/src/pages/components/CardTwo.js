import React from "react";
import Typewriter from "typewriter-effect";
export default function CardTwo() {
  return (
    <div className="app-card app-card2">
      <h2>See messages being typed in real time!</h2>
      <div className="example-card">
        <div className="group-messages xv3">
          <div className="card-name">mark</div>
          <div className="side-bar-message-container1 flex-end">
            <div className="blue-div-message green-message">
              no worries haha
            </div>
          </div>
          <div className="side-bar-message-container1 x2">
            <div className="blue-div-message gray-message x2">
              <strong>mark is typing:</strong>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500)
                    .typeString("do you want to go out for dinner?")
                    .deleteChars(7)
                    .typeString("coffee?")
                    .deleteChars(7)
                    .pauseFor(1000)
                    .typeString("starbuc")
                    .deleteAll()
                    .pauseFor(1500)
                    .deleteAll()
                    .pauseFor(2000)
                    .typeString("hello")
                    .deleteAll()
                    .pauseFor(1500)
                    .typeString("what is your favorite book?")
                    .changeDelay(120)

                    .start();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
