import { useInput } from "../hooks/useInput.hook";

function UseInput() {
  const maxLen = (value: string) => value.length <= 10 && !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default UseInput;
