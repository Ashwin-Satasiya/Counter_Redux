import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import CounterControls from "./components/CounterControls";
import InputNumberCounter from "./components/InputNumberCounter";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((state) => state.privacy);

  return (
    <div className="counter-container">
      <h3 className="mt-2 mb-5">Counter App</h3>

      {privacy ? <PrivacyMessage /> : <DisplayCounter />}

      <CounterControls />
      <InputNumberCounter />
    </div>
  );
}

export default App;
