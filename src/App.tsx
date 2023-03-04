import React from "react";
import UseClick from "./components/UseClick";
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
    </div>
  );
}

export default App;
