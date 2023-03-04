import { useTitle } from "../hooks/useTitle.hook";

function UseTitle() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

export default UseTitle;
