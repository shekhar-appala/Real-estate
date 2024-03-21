import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showTopBtn && (
      <div className="top-to-btm" onClick={goToTop}>
        <span className="topArrow"></span>
      </div>
    )
  );
}
export default ScrollToTop;
