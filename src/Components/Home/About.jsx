import React from "react";
import AnimatedNumber from "../AnimatedNumber";

function About() {
  return (
    <div className="homeAbout">
      <div className="container py-5 ">
        <div>
          <h3>THE PRIMELAND MARK</h3>
          <p>
            We work with a purpose and the purpose is to create value for
            everyone.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 order-1 order-lg-2 ">
            <img
              src="/Images/home-about-logo.png"
              alt="home-about-logo"
              className="w-100 m-auto"
            />
          </div>
          <div className="col-lg-8 order-2 order-lg-1">
            <div>
              <p>
                At Primeland, we focus on developing positive, smarter and
                sustainable communities to elevate the lifestyles for everyone.
                We believe that every customer would like to be surrounded by
                the finer things in life, every property we develop has been
                prudently considered, thoughtfully planned, methodically
                designed and robustly built with a seasoned buyer in mind.
              </p>
              <p>
                Our commitment to our customers has been at the core of what we
                do and have always placed a premium on a collaborative and a
                “win-win” relationship’s.
              </p>
              <button className="AboutBtn">
                About <span className="RightArrow"></span>
              </button>
              <div className="d-flex text-center flex-wrap justify-content-between archive pt-5">
                <div>
                  <p>INDUSTRY EXPERIENCE</p>
                  <h1>
                    <AnimatedNumber value={25} />+
                  </h1>
                </div>
                <div>
                  <p>ACRES CRAFTED</p>
                  <h1>
                    <AnimatedNumber value={2} />
                    K+
                  </h1>
                </div>
                <div className="text-center">
                  <p>HAPPY CUSTOMERS</p>
                  <h1>
                    <AnimatedNumber value={10} />
                    K+
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
