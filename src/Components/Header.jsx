import React from "react";

function Header() {
  return (
    <div className="Header">
      <div className="container p-4">
        <div className="row p-2">
          <div className="col-lg-3 d-flex align-items-center mb-3">
            <div>
              <img src="/Images/primeland-logo.png" alt="primeland-logo.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center mb-3">
                <div className="webicon"></div>
                <div>
                  <h6>My Home Hub </h6>
                  <p className="mb-0">Hitech City, Hyderabad</p>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center mb-3">
                <span className="mailicon"></span>
                <a href="mailto:info@primelandindia.com">
                  <b>info@primelandindia.com</b>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 px-3">
            <div className="Social_Con">
              <img src="/Images/fb.png" alt="fbcon" />
              <img src="/Images/instagram.png" alt="fbcon" />
              <img src="/Images/youtube.png" alt="fbcon" />
              <img src="/Images/Linkedin.png" alt="fbcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
