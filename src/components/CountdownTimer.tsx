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
    <div className="bg-gradient-to-br from-ai-blue to-ai-purple p-2 md:p-4 rounded-lg md:rounded-xl text-center min-w-[60px] md:min-w-[80px] animate-pulse-glow flex-1 max-w-[70px] md:max-w-none">
      <div className="text-lg md:text-3xl font-bold text-white">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-sm text-ai-cyan uppercase tracking-wide md:tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-3 px-2">
      <div className="bg-ai-orange text-ai-navy px-3 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-base uppercase tracking-wide animate-bounce max-w-full text-center">
        🎉 FREE FOR 3 DAYS! 🎉
      </div>
      
      <div className="flex space-x-1 md:space-x-4 w-full justify-center">
        <TimeCard value={timeLeft.days} label="Days" />
        <TimeCard value={timeLeft.hours} label="Hours" />
        <TimeCard value={timeLeft.minutes} label="Min" />
        <TimeCard value={timeLeft.seconds} label="Sec" />
      </div>
      
      <p className="text-ai-cyan text-xs md:text-base font-medium text-center px-2">
        Hurry! Get your FREE access now
      </p>
    </div>
  );
};

export default CountdownTimer;