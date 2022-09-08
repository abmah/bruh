import React from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import CardTwo from "./components/CardTwo";
import { useInView } from "react-intersection-observer";
export default function IndexPage(props) {
  // const navigate = useNavigate();
  // React.useEffect(() => {
  //   const token = localStorage.getItem("DC_Token");

  //   if (!token) {
  //   } else {
  //   }
  //   // eslint-disable-next-line
  // }, []);

  // background color logic

  // create the observer
  const { ref: titleSlid, inView } = useInView({ threshold: 0.4 });
  const [scrollInPixels, setScrollInPixels] = React.useState(0);
  window.addEventListener("scroll", () => {
    setScrollInPixels(Math.floor(window.scrollY));
  });

  function blueSky() {
    const blue = 255 - scrollInPixels / 5;
    if (blue > 150) {
      return blue;
    } else {
      return blue;
    }
  }

  let divStyle = {
    backgroundColor: `rgb(${0}, ${blueSky()}, ${255 - scrollInPixels / 5})`,
  };
  // end of background color logic

  return (
    <div className="indexPage">
      <div>
        <div style={divStyle} id="background-wrap">
          <div>
            <div className="header">
              <div>
                {" "}
                <Link className="header-link" to="/about">
                  About
                </Link>
              </div>
              <div>
                <Link className="header-link" to="/login">
                  Login
                </Link>
                <Link className="header-link" to="/register">
                  Register
                </Link>
              </div>

              {/* <a href="/login">Login</a> <a href="/register">register</a> */}
            </div>
          </div>
          <div className="sun-container">
            <div className="sun"></div>
          </div>
          <div className="cloud"></div>
          <div className="title-holder">
            <h1 className="">Welcome To Dizcord</h1>
          </div>
          <div className="description-holder">
            <p className="description">
              Dizcord is a web chatting application that allows you to chat with
              your friends and family.
            </p>
          </div>
          <br />
          <h2
            ref={titleSlid}
            className={`secondary-title ${inView ? "slide-in" : "slide-out"}`}
          >
            Start chatting in seconds
          </h2>
          <Card />

          <div className="moon-container">
            <div className="moon"></div>
          </div>
          <br />
          <div className="gray-cloud-container">
            <div className="cloud gray-cloud"></div>
          </div>
          <br />
          <div className="gray-cloud-container">
            <div className="cloud gray-cloud1"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CardTwo />

          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="footer">
            <div> Copyright © 2022 All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
