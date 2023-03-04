import { useBeforeLeave } from "../hooks/useBeforeLeave.hook";

function UseBeforeLeave() {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return <div>Do not leave</div>;
}

export default UseBeforeLeave;
