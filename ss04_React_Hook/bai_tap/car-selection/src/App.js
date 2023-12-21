
import './App.css';
import CarSelection from "./components/CarSelection";
import Timer from "./components/Timer";
import CounterComponentCustom from "./components/CounterComponentCustom";
import TimerWithMinute from "./components/TimerWithMinute";
import AddContactForm from "./components/AddContactForm";

function App() {
  return (
    <div className="App">
      <>
        <CarSelection></CarSelection>
          <Timer></Timer>
          <CounterComponentCustom/>
          <TimerWithMinute/>
          <AddContactForm/>
      </>
    </div>
  );
}

export default App;
