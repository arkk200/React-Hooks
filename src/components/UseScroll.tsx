import { useScroll } from "../hooks/useScroll.hook";

function UseScroll() {
  const { y } = useScroll();
  return (
    <div
      style={{
        color: y > 150 ? "yellowgreen" : "gray",
        fontSize: 50,
        fontWeight: "900",
      }}
    >
      HELLO
    </div>
  );
}

export default UseScroll;
