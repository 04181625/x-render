import React from "react";
import { IHandleFormProps, XRender } from "./xRender";

function App() {
  const handleFormProps: IHandleFormProps = {
    title: "Your Title",
  };

  return (
    <div className="App">
      <XRender {...handleFormProps} />
    </div>
  );
}

export default App;
