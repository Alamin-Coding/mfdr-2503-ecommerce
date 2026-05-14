import React, { useEffect, useState } from "react";


const useCountDown = (targetDate) => {


  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { day: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  let formateTime = {
    day: String(timeLeft.day).padStart(2, "0"),
    hours: String(timeLeft.hours).padStart(2, "0"),
    minutes: String(timeLeft.minutes).padStart(2, "0"),
    seconds: String(timeLeft.seconds).padStart(2, "0"),
  };


  return formateTime
};

export default useCountDown;
