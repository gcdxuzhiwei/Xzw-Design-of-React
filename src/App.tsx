import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        hello
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        hello
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        hello
      </Button>
      <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com">
        hello
      </Button>
    </div>
  );
}

export default App;
