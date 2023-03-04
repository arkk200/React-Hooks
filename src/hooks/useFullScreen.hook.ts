import { useRef } from "react";

export const useFullScreen = <T>(callback: (isFull: boolean) => any) => {
  const elementRef = useRef<T>(null);
  const triggerFullScreen = () => {
    if (elementRef.current instanceof HTMLElement) {
      elementRef.current.requestFullscreen();
      callback(true);
    }
  };
  const exitFullScreen = () => {
    document.exitFullscreen();
    callback(false);
  };
  return { elementRef, triggerFullScreen, exitFullScreen };
};
