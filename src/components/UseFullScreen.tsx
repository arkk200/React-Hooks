import { useFullScreen } from "../hooks/useFullScreen.hook";

function UseFullScreen() {
  const onFullScreen = (isFullScreen: boolean) => {
    console.log(isFullScreen ? "Full screen" : "Non-full screen");
  };
  const { elementRef, triggerFullScreen, exitFullScreen } =
    useFullScreen<HTMLImageElement>(onFullScreen);
  return (
    <div>
      <div ref={elementRef}>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
          width={500}
        />
        <button onClick={exitFullScreen}>Exit fullscreen</button>
        <button onClick={triggerFullScreen}>Make fullscreen</button>
      </div>
    </div>
  );
}

export default UseFullScreen;
