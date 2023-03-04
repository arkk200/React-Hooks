import { useClick } from "../hooks/useClick.hook";

function UseClick() {
  const sayHello = () => console.log("Hello");
  const title = useClick<HTMLDivElement>(sayHello);
  return <h1 ref={title}>Hi</h1>;
}

export default UseClick;
