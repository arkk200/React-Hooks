import { useFadeIn } from "../hooks/useFadeIn.hook";

function UseFadeIn() {
  const fadeInH1 = useFadeIn<HTMLHeadingElement>();
  const fadeInP = useFadeIn<HTMLHeadingElement>({ duration: 1.5, delay: 0.5 });
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        voluptate.
      </p>
    </div>
  );
}

export default UseFadeIn;
