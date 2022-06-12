import './App.css';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';

function App() {
  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <AnalogClock />
          <DigitalClock />
        </div>
      </div>
    </section>
  );
}

export default App;
