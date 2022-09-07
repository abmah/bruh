import React from "react";
import { useInView } from "react-intersection-observer";
export default function Card() {
  // Create the observer, same as before:
  const { ref: card, inView } = useInView({});

  return (
    <div ref={card} className={`app-card ${inView ? "card-in" : "card-out"}`}>
      <div className="example-card">
        <div className="card-sidebar">
          <div className="card-side-name">mark</div>
          <div className="card-side-name">david</div>
          <div className="card-side-name">shaquille</div>
          <div className="card-side-name">mark-old</div>
          <div className="card-side-name">pizza</div>
          <div className="card-side-name">grandma</div>
          <div className="card-side-name">mom</div>
          <div className="card-side-name">jerome</div>
          <div className="card-side-name">danny</div>
          <div className="card-side-name">mark-3</div>
          <div className="card-side-name">dustin</div>
          <div className="card-side-name">bob</div>
          <div className="card-side-name">italian mark</div>
        </div>

        <div className="group-messages">
          <div className="side-bar-message-container">
            <div className="blue-div-message">
              <strong>mark:&ensp;</strong>hey are you worried about tomorow?
            </div>
          </div>
          <div className="side-bar-message-container1 flex-end ">
            <div className="blue-div-message x-green">
              no? whats going on tommoroz?
            </div>
          </div>
          <div className="side-bar-message-container1 flex-end ">
            <div className="blue-div-message x-green">hello?</div>
          </div>
          <div className="side-bar-message-container1 flex-end ">
            <div className="blue-div-message x-green ">Hellooo???</div>
          </div>
          <div className="side-bar-message-container1 flex-end ">
            <div className="blue-div-message x-green">
              bro you cant just say that and leave
            </div>
          </div>
          <div className="side-bar-message-container1 ">
            <div className="blue-div-message">
              <strong>mark:&ensp;</strong>lol
            </div>
          </div>
          <div className="side-bar-message-container1 flex-end ">
            <div className="blue-div-message x-green">
              whats going on tommoro??
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
