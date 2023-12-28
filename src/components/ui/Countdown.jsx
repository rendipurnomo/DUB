import { useEffect, useState } from 'react'

const Countdown = ({ bulan, tanggal, classname }) => {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${bulan}/${tanggal}/${year}`) - +new Date();

    let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Menit: Math.floor((difference / 1000 / 60) % 60),
      Detik: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft
}
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  return () => clearTimeout(timer);
});

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} 
      
      className={`bg-red-500 rounded text-white mx-1 font-bold ${classname}`}>
        {timeLeft[interval]}{' '}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Countdown