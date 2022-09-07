import React from "react";
import Typewriter from "typewriter-effect";
// import { useRef } from "react";
import { useInView } from "react-intersection-observer";
export default function CardTwo() {
  // const showRef = useRef();
  // const [show, setShow] = React.useState(false);
  // console.log(show);

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setShow(entry.isIntersecting);
  //     // console.log(entry);
  //   });
  //   observer.observe(showRef.current);
  // }, []);

  const { ref: bruhRef, inView } = useInView();
  return (
    <div
      ref={bruhRef}
      className={`app-card app-card2 ${inView ? "bruhmom" : "bruhdad"}`}
    >
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
