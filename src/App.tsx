import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <h2>Hello Java</h2>
        <code>const a = 'b'</code>
        <Button
          autoFocus
          onClick={(e) => {
            alert("kneel down!");
          }}
          className="TestCustom"
        >
          Hello
        </Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>
          Mistress Xuan
        </Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} disabled>
          Mistress Xuan
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>
          Mistress Xuan
        </Button>
        <Button btnType={ButtonType.Danger}>Mistress Baixue</Button>
        <Button
          btnType={ButtonType.Link}
          href="http://wwww.google.com"
          size={ButtonSize.Large}
        >
          Mistress Xue
        </Button>
      </header>
    </div>
  );
}

export default App;
