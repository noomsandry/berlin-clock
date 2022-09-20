import { useEffect, useState } from 'react';
import './App.css';
import BerlinClock from './components/BerlinClock/berlin-clock';
import NumericClock from './components/NumericClock/numeric-clock';

function App() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className='app-container'>
      <BerlinClock date={ date }/>
      <NumericClock date={ date } />
    </div>
  );
}

export default App;
