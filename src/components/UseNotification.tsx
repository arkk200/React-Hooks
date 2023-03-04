import { useNotification } from "../hooks/useNotification.hook";

function UseNotification() {
  const triggerNotification = useNotification("Can u giv mi a permission?", {
    body: "giv permission is good.",
  });
  return (
    <button onClick={triggerNotification}>give notification permission</button>
  );
}

export default UseNotification;
