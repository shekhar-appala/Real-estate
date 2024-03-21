import React, { useState } from "react";

function FeaturedProject() {
  const [IsHovered, setIsHovered] = useState(0);
  const Data = [
    {
      img: "/Images/FP1.jpg",
      title: "THE ONE @ MAHABUBNAGAR, TELANGANA",
      slug: "the-one",
    },
    {
      img: "/Images/FP2.webp",
      title: " RESERVE @ GUDUR, TELANGANA",
      slug: "reserve",
    },
    {
      img: "/Images/FP3.webp",
      title: " ICONIA @ BALANAGAR, TELANGANA.",
      slug: "iconia",
    },
    {
      img: "/Images/FP4.jpg",
      title: " GREEN FIELDS @ NANDIPET, TELANGANA",
      slug: "green-fields",
    },
    {
      img: "/Images/FP5.jpg",
      title: " GREEN FIELDS @ KOMIREDDYPALLY, HYDERABAD - BANGALORE NH",
      slug: "green-hyd",
    },
    {
      img: "/Images/FP6.jpg",
      title: "PROJECT NAME @ PEDDA AMBERPET, HYDERABAD",
      slug: "project-name",
    },
  ];

  return (
    <div>
      <div className="FeaturedProject">
        <div className="container py-5">
          <h1>
            OUR FEATURED <span>PROJECTS</span>
          </h1>
          <div onMouseLeave={() => setIsHovered(0)} className="row py-5">
            {Data.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4 mb-5  img-container">
                <img
                  onMouseEnter={() => setIsHovered(i)}
                  src={item.img}
                  alt="/"
                />
                {IsHovered === i && (
                  <a href={`/projects/${item.slug}`}>
                    {" "}
                    <div className="FP_Hovered">
                      <h6>
                        {item.title}
                        <span className="RightArrow"></span>
                      </h6>
                    </div>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
