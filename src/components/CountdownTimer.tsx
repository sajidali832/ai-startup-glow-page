import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-gradient-to-br from-ai-blue to-ai-purple p-4 rounded-xl text-center min-w-[80px] animate-pulse-glow">
      <div className="text-2xl md:text-3xl font-bold text-white">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-ai-cyan uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-ai-orange text-ai-navy px-6 py-2 rounded-full font-bold text-sm md:text-base uppercase tracking-wide animate-bounce">
        ⚡ 3-Day Flash Sale! ⚡
      </div>
      
      <div className="flex space-x-2 md:space-x-4">
        <TimeCard value={timeLeft.days} label="Days" />
        <TimeCard value={timeLeft.hours} label="Hours" />
        <TimeCard value={timeLeft.minutes} label="Minutes" />
        <TimeCard value={timeLeft.seconds} label="Seconds" />
      </div>
      
      <p className="text-ai-cyan text-sm md:text-base font-medium">
        Hurry! Offer expires soon
      </p>
    </div>
  );
};

export default CountdownTimer;