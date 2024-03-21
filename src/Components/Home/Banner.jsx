import React from "react";
import Slider from "react-slick";
import "../../Styles/Home.css";

function Banner() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const Data = [
    {
      img: "/Images/slider1.jpg",
      title: "CRAFTING LANDMARKS",
      subTitle: "Transforming lifestyles.",
      description: "",
      textAlign: "left",
    },
    {
      img: "/Images/slider2.jpg",
      title: " A GREAT INVESTMENT FOR THE FUTURE.",
      subTitle: "",
      textAlign: "end",
      description:
        "<p >The Right Angle to Make Your Idea a Reality.<br>Build just the right house to live smart. </p>",
    },
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Data.map((item, i) => (
          <div key={i}>
            <div
              className={`SliderCon`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div
                style={{ justifyContent: item.textAlign }}
                className="container d-flex align-items-center h-100"
              >
                <div>
                  <h1>{item.title}</h1>
                  <h4>{item.subTitle}</h4>
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
