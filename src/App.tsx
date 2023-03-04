import React from "react";
import UseBeforeLeave from "./components/UseBeforeLeave";
import UseClick from "./components/UseClick";
import UseConfirm from "./components/UseConfirm";
import UseFadeIn from "./components/UseFadeIn";
import UseInput from "./components/UseInput";
import UsePreventLeave from "./components/UsePreventLeave";
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
      <hr />
      <UsePreventLeave />
      <hr />
      <UseBeforeLeave />
      <hr />
      <UseFadeIn />
    </div>
  );
}

export default App;
