import './App.css';
import AlarmOption from './components/AlarmOption/AlarmOption';
import AnalogClock from './components/AnalogClock/AnalogClock';
import DigitalClock from './components/DigitalClock/DigitalClock';

function App() {
  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <AnalogClock />
          <DigitalClock />
          <AlarmOption />
        </div>
      </div>
    </section>
  );
}

export default App;
