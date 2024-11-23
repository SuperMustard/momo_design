import React from "react";
import Alert from "./components/Alert/alert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <h2>Hello Java</h2>
        <Alert title="this is an alert" alertType="default"></Alert>
        <Alert title="this is an alert" alertType="danger"></Alert>
        <Alert title="this is an alert" alertType="success"></Alert>
      </header>
    </div>
  );
}

export default App;
