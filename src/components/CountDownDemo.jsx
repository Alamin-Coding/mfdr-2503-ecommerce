import { useEffect, useState } from "react";

const pad = (num) => String(num).padStart(2, "0");

const getTimeLeft = (targetDate) => {
  const diff = new Date(targetDate) - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor(diff /  3_600_000) % 24,
    minutes: Math.floor(diff /     60_000) % 60,
    seconds: Math.floor(diff /      1_000) % 60,
  };
};

const useCountdown = (targetDate, onExpire) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const tick = () => {
      const next = getTimeLeft(targetDate);
      setTimeLeft(next);

      // const isExpired = Object.values(next).every((v) => v === 0);
      // if (isExpired) onExpire?.();
    };

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // const expired = Object.values(timeLeft).every((v) => v === 0);

  return {
    ...timeLeft,
    // expired,
    formattedTimeLeft: {
      days:    pad(timeLeft.days),
      hours:   pad(timeLeft.hours),
      minutes: pad(timeLeft.minutes),
      seconds: pad(timeLeft.seconds),
    },
  };
};

export default useCountdown;