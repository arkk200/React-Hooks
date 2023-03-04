import React from "react";
import UseClick from "./components/UseClick";
import UseConfirm from "./components/UseConfirm";
import UseInput from "./components/UseInput";
import UseTabs from "./components/UseTabs";
import UseTitle from "./components/UseTitle";

function App() {
  return (
    <div>
      <UseInput />
      <hr />
      <UseTabs />
      <hr />
      <UseTitle />
      <hr />
      <UseClick />
      <hr />
      <UseConfirm />
    </div>
  );
}

export default App;
