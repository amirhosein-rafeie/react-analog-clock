import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [clock, setClock] = useState({
    hourRatio: 0,
    minuteRatio: 0,
    secondRatio: 0,
  });

  const { hourRatio, minuteRatio, secondRatio } = clock;

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const secondRatio = currentDate.getSeconds() / 60;
      const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
      const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
      setClock({ hourRatio, minuteRatio, secondRatio });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <Clock
        hourRatio={hourRatio}
        minuteRatio={minuteRatio}
        secondRatio={secondRatio}
      />
    </div>
  );
}

export default App;
