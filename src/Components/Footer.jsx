import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <img className="mb-4" src="/images/footer-logo.png" alt="/" />
            <div>
              <h6>CORPORATE OFFICE:</h6>
              <p>
                My Home Hub, 7th Floor, Block 2, Madhapur, Hitechcity Hyderabad,
                Telangana 500033.{" "}
              </p>
              <h6>BANGALORE OFFICE:</h6>
              <p>
                40/1A, 1st floor, Basappa Complex, Lavelle Road, behind Rotary
                Club, Bengaluru, Karnataka 560001{" "}
              </p>
              <h6>EMAIL</h6>
              <p>
                <a href="mailto:info@primelandindia.com">
                  {" "}
                  info@primelandindia.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Our Story</a>
              </li>
              <li>
                <a href="/">Partner With Us</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">NRI</a>
              </li>
              <li>
                <a href="/">EMI Calculator</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4>Projects</h4>
            <ul>
              <li>
                <a href="/">Pedda Amberpet</a>
              </li>
              <li>
                <a href="/">Reserve</a>
              </li>
              <li>
                <a href="/">Iconia</a>
              </li>
              <li>
                <a href="/">The One</a>
              </li>
              <li>
                <a href="/">Greenfield at Kommireddypally</a>
              </li>
              <li>
                <a href="/">Greenfield Nandipet</a>
              </li>
              <li>
                <a href="/">Greenfield Forever</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <div className="container py-3">
          <div className=" d-flex flex-wrap justify-content-between align-items-center">
            <div>
              <p>© 2022 Primeland Group. Designed by Creative Ethics</p>
            </div>{" "}
            <div>
              <a href="/">Privacy Policy</a>
            </div>
            <div>
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
    </div>
  );
}

export default Footer;
