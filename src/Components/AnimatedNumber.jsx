import React, { useState, useEffect, useRef } from "react";

const NumberAnimation = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isVisible && currentValue < value) {
      intervalRef.current = setInterval(() => {
        setCurrentValue((prevValue) => prevValue + 1);
      }, 200);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isVisible, currentValue, value]);

  useEffect(() => {
    if (currentValue === value) {
      clearInterval(intervalRef.current);
    }
  }, [currentValue, value]);

  const onScroll = () => {
    const rect = document
      .querySelector(".number-animation")
      .getBoundingClientRect();
    setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <span className="number-animation">{currentValue}</span>;
};

export default NumberAnimation;
