import { usePreventLeave } from "../hooks/usePreventLeave.hook";

function UsePreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
}

export default UsePreventLeave;
