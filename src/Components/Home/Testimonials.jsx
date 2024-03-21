import React from "react";

function Testimonials() {
  const Data = [
    {
      name: "Anand Mishra",
      img: "/images/logo.png",
      location: "Kompally, Hyderabad",
      msg: "Best real estate company for the investment purpose in approved layouts with fabulous offers from the company.",
    },
    {
      name: "Srinivas Rao",
      img: "/images/logo.png",
      location: "Kondapur,Hyderabad",
      msg: "I am happy that I purchased a villa with Primeland Group because the quality of materials they used are very great and long lasting.",
    },
    {
      name: "Pradeep Kumar",
      img: "/images/logo.png",
      location: "Indra Nagar,Bangalore",
      msg: "Really impressed by the customer service team, they are extremely friendly and always helpful for a picky buyer like me.",
    },
  ];
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="Testimonials p-5">
          <div>
            <h3>Testimonials</h3>
            <h1>OUR CUSTOMER WORDS</h1>
          </div>
          <div className="quotes">
            <span className="double-quotes"></span>
          </div>
          <div className="row py-5">
            {Data.map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="TestimonialsCard ">
                  <h5>{item.name}</h5>
                  <p>{item.location}</p>
                  <img src={item.img} alt="/" />
                  <p>{item.msg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
