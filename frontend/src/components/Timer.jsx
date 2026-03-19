import React, { useEffect, useState } from 'react';

const Timer = ({ isPremium }) => {
  const [remainingTime, setRemainingTime] = useState(3600); // in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="timer">
      <h2>Time Remaining: {formatTime(remainingTime)}</h2>
      {isPremium && <span className="premium-indicator">Premium User</span>}
    </div>
  );
};

export default Timer;