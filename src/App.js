import logo from "./logo.svg";
import "./App.css";
import SetLearn from "./components/SetLearn.component";
import ReadLearn from "./components/ReadLearn.component";
import OtherLearn from "./components/OtherLearn.component";

function App() {
  return (
    <div className="App">
      <SetLearn />
      <ReadLearn />
      <OtherLearn />
    </div>
  );
}

export default App;
