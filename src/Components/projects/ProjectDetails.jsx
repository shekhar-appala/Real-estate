/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import PhotoGallery from "./Gallery";

function ProjectDetails() {
  const ProjectHigh = [
    { name: "BASKET BALL", img: "/Images/BASKETBALL.png" },
    { name: "BOARD GAMES", img: "/Images/BOARDGAMES.png" },
    { name: "CARROM", img: "/Images/CARROM.png" },
    { name: "CHESS", img: "/Images/CHESS.png" },
    { name: "COFFEE SHOP", img: "/Images/COFFEESHOP.png" },
    { name: "CYCLING TRACK", img: "/Images/CYCLINGTRACK.png" },
    { name: "FOOSBALL", img: "/Images/FOOSBALL.png" },
    { name: "GYM", img: "/Images/GYM.png" },
    { name: "KIDS PLAY ZONE", img: "/Images/KIDSPLAYZONE.png" },
    { name: "LOBBY", img: "/Images/LOBBY.png" },
    {
      name: "MULTIPURPOSE PARTY HALL",
      img: "/Images/PARTYHALL.png",
    },
    { name: "NET CRICKET", img: "/Images/NETCRICKET.png" },
    { name: "RESTAURANT", img: "/Images/RESTAURANT.png" },
    { name: "TABLE TENNIS", img: "/Images/TABLETENNIS.png" },
    { name: "VOLLEY BALL COURT", img: "/Images/VOLLEYBALLCOURT.png" },
  ];

  return (
    <div className="projectDetails">
      <div id="about">
        <div className="container py-5">
          <h1>
            Welcome to <span>Pedda Amberpet</span>
          </h1>

          <p>
            If the apartment life is more of your style then we’ve got you
            covered. Live in your dream home at an excellent premium, 2 & 3 BHK
            apartments with exclusive amenities that let you experience luxury
            and comfort unlike anything else.
          </p>
        </div>
      </div>
      <div id="pHighlights">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <h1>
                <span>Project</span> Highlights
              </h1>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {ProjectHigh.map((item, i) => (
                  <div
                    key={i}
                    className="col-md-3 col-sm-6 col-md-4 text-center mb-4"
                  >
                    <img src={item.img} alt={item.name} width={100} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/Images/projects_layout.png" alt="layout" className="w-100" />
      </div>
      <PhotoGallery/>
      <div className="bg_green">
        {" "}
        <div id="LHighlights">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3169838736203!2d78.46474407390738!3d17.444536001158774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9190e21c9721%3A0xbeee426031eb5d8f!2sSnapTics%20%7C%20Best%20Branding%20and%20Digital%20Marketing%20Agency%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1710949764086!5m2!1sen!2sin"
                  className="map"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-md-6">
                <h1>
                  <span>Location</span> Advantages
                </h1>
                <ul>
                  <li>Very close to Ramoji Film city</li>
                  <li>10 mins from Sanghi Temple</li>
                  <li>10 mins from the proposed Railway Station at Nagole</li>
                  <li>Very next to Outer Ring Road</li>
                  <li>30 mins drive to International Airport</li>
                  <li>Close to Discoveri Oaks international School</li>
                  <li>Candor Shrine I School</li>
                  <li>Close proximity to Super Speciality Hospitals</li>
                  <li>Very close to RamaDevi Public School</li>
                  <li>Close to Valvoline Cummins Pvt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="contact">
          <div className="contact p-5 ">
            <h2>Pedda Amberpet</h2>
            <p>
              <a href="mailto:info@primelandindia.com">
                info@primelandindia.com
              </a>{" "}
              <br />
              Site Address: Pedda Amberpet, NH 65, Hyderabad,
              <br /> Telangana 501511
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
