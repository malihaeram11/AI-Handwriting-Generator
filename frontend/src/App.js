import React from "react";
import "./App.css";
import HandwritingForm from "./components/HandwritingForm";

function App() {
  return (
    <div className="App">
      <h1>AI Handwriting Generator</h1>
      <HandwritingForm />
      <div className="footer">
        Made by Maliha <span>❤️</span>
      </div>
    </div>
  );
}

export default App;
