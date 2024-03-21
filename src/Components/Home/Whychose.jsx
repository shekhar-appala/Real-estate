import React from "react";
import "../../Styles/Home.css";

function Whychose() {
  return (
    <div className="Whychose">
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-4 card-blue">
            <img className="mb-4" src="/Images/logo.png" alt="/" />
            <h1>
              WHY PEOPLE <br />
              CHOOSE <b>PRIMELAND</b>
            </h1>
            <p>
              We work with a purpose and the purpose is to create value for
              everyone.
            </p>
            <button className="AboutBtn w-100 ">
              About <span className="RightArrow"></span>
            </button>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6 card-yellow">
                <h2>01</h2>
                <h3>Passion</h3>
                <p>
                  We are passionate about what we do and we believe that Real
                  Estate Development can change the landscape of the markets and
                  also to the people’s lives. We’re relentlessly focused on
                  growth opportunities to create increased value for everyone.
                </p>
              </div>
              <div className="col-lg-6 card-white">
                {" "}
                <h2>02</h2>
                <h3>Value Creation</h3>
                <p>
                  We work with a purpose and the purpose is to create value for
                  every stake holder that is associated with us, whether it is a
                  minute detail, a complex design, or a business transaction. We
                  have constantly evolved to the changing markets to promote a
                  positive change.
                </p>
              </div>
              <div className="col-lg-6 card-white">
                {" "}
                <h2>03</h2>
                <h3>Commitment</h3>
                <p>
                  We do what we say and believe in doing the right thing. We are
                  honest about what we think and commit only when we have
                  conviction. We celebrate progress not just results. We believe
                  everything we do has to be of the highest possible standard at
                  all times.
                </p>
              </div>
              <div className="col-lg-6 card-yellow">
                {" "}
                <h2>04</h2>
                <h3>Sustainability</h3>
                <p>
                  What some call difficult, we love doing it. We go beyond
                  property development to creating meaningful and sustainable
                  communities that are built to last. We care for nature and
                  constantly the best practices to significantly reduce the
                  negative impact on the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychose;
