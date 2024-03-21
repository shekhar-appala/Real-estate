import React from "react";
import "../../Styles/Projects.css";

function ProjectHeader() {
  return (
    <div>
      <div className="Header">
        <div className="container py-3">
          <div className=" d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center">
            <div>
              <div className="Social_Con">
                <img src="/Images/fb.png" alt="fbcon" />
                <img src="/Images/instagram.png" alt="fbcon" />
                <img src="/Images/youtube.png" alt="fbcon" />
                <img src="/Images/Linkedin.png" alt="fbcon" />
              </div>
            </div>
            <div>
              <p className="px-3 text-center">
                {" "}
                <a href="mailto:info@primelandindia.com">
                  <span className="mailicon1"></span>
                  {"  "}info@primelandindia.com{" "}
                </a>
                <span className="locationIcon"></span> Pedda Amberpet, NH 65,
                Hyderabad, Telangana 501511
              </p>
            </div>
            <div>
              <div>
                <a href="/">
                  <img
                    src="/Images/primeland-logo.png"
                    alt="primeland-logo.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
